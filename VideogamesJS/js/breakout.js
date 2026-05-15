/* Breakout Game 
Ilan Hanenberg Wasserman | A01787440
Date: 4th of May 2026
*/

"use strict";

const canvasWidth = 600;
const canvasHeight = 685;

let ctx;
let game;
let oldTime = 0;

let padSpeed = 0.6;
let ballSpeed = 0.45;
let initialSpeed = 0.45;
let speedIncrease = 1;

const backgroundIMG = "../background.jpg";
let background;

const blockSprite = "../block.png";

class Ball extends GameObject {
  constructor(position, width, height, color) {
    super(position, width, height, color);
    this.velocity = new Vector(0, 0);
    this.radius = width / 2;
  }

  update(deltaTime) {
    if (!game.inPlay) {
      this.position.x = game.pad.position.x;
      this.position.y = game.pad.position.y - game.pad.halfSize.y - this.radius;
    } else {
      this.position = this.position.plus(
        this.velocity.times(ballSpeed).times(deltaTime),
      );
    }
    this.updateCollider();
  }

  serve() {
    let angle = (Math.random() * Math.PI) / 2 + Math.PI / 4;
    this.velocity = new Vector(Math.cos(angle), -Math.sin(angle));
    ballSpeed = initialSpeed;
  }
}

class Pad extends GameObject {
  constructor(position, width, height, color) {
    super(position, width, height, color);
    this.velocity = new Vector(0, 0);
    this.motion = {
      left: {
        axis: "x",
        sign: -1,
      },
      right: {
        axis: "x",
        sign: 1,
      },
    };
    this.keys = [];
  }

  update(deltaTime) {
    this.velocity.x = 0;
    this.velocity.y = 0;

    for (const direction of this.keys) {
      const axis = this.motion[direction].axis;
      const sign = this.motion[direction].sign;
      this.velocity[axis] += sign;
    }

    this.velocity = this.velocity.normalize().times(padSpeed);

    this.position = this.position.plus(this.velocity.times(deltaTime));

    this.clampWithinCanvas();
    this.updateCollider();
  }

  clampWithinCanvas() {
    if (this.position.x - this.halfSize.x < 0) {
      this.position.x = this.halfSize.x;
    }
    if (this.position.x + this.halfSize.x > canvasWidth) {
      this.position.x = canvasWidth - this.halfSize.x;
    }
  }
}

function impactAudio() {
  const path = "../impactAudio.mp3";
  const audio = new Audio();
  audio.src = path;
  audio.addEventListener("canplay", () => audio.play());
}

class Game {
  constructor() {
    this.lives = 3;
    this.destroyedBlocks = 0;
    this.score = 0;
    this.level = 1;
    this.inPlay = false;
    this.gameOver = false;
    this.time = 0;
    this.lastRowTime = 0;

    const fontStyle = "bold 20px 'Arial', cursive";
    this.scoreLabel = new TextLabel(20, 45, fontStyle, "white");
    this.timeLabel = new TextLabel(
      canvasWidth / 2 - 35,
      45,
      fontStyle,
      "white",
    );
    this.levelLabel = new TextLabel(
      canvasWidth / 2 - 35,
      80,
      fontStyle,
      "white",
    );
    this.livesLabel = new TextLabel(
      canvasWidth - 110,
      45,
      "26px 'Arial', cursive",
      "white",
    );

    this.blocks = [];
    this.initObject();
    this.createLvl(this.level + 2);
    this.createEventListeners();
  }

  initObject() {
    background = new GameObject(
      new Vector(canvasWidth / 2, canvasHeight / 2),
      canvasWidth,
      canvasHeight,
    );
    background.setSprite(backgroundIMG);

    this.pad = new Pad(
      new Vector(canvasWidth / 2, canvasHeight - 40),
      135,
      65,
      "white",
    );
    this.ball = new Ball(new Vector(0, 0), 25, 25, "white");
    this.borderTop = new GameObject(
      new Vector(canvasWidth / 2, 0),
      canvasWidth,
      10,
      "white",
    );
    this.borderBttm = new GameObject(
      new Vector(canvasWidth / 2, canvasHeight),
      canvasWidth,
      10,
      "white",
    );
    this.borderLeft = new GameObject(
      new Vector(0, canvasHeight / 2),
      10,
      canvasHeight,
      "white",
    );
    this.borderRight = new GameObject(
      new Vector(canvasWidth, canvasHeight / 2),
      10,
      canvasHeight,
      "white",
    );

    this.pad.setSprite("../padSprite.png");
    this.pad.setCollider(100, 45);
    this.ball.setSprite("../ballSprite.png");

    this.actors = [
      this.pad,
      this.ball,
      this.borderTop,
      this.borderBttm,
      this.borderLeft,
      this.borderRight,
    ];
  }

  createLvl(rows) {
    this.blocks = [];
    const quantity = 6;
    const blockWidth = 90;
    const blockHeight = 45;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < quantity; j++) {
        let x = 70 + j * 91;
        let y = 130 + i * 50;
        let block = new GameObject(
          new Vector(x, y),
          blockWidth,
          blockHeight,
          "white",
        );
        block.setSprite(blockSprite);
        block.setCollider(70, 40);
        this.blocks.push(block);
      }
    }
  }

  addNewRow() {
    const quantity = 6;
    const blockWidth = 90;
    const blockHeight = 45;

    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].position.y += 50;
      if (this.blocks[i].updateCollider) {
        this.blocks[i].updateCollider();
      }
    }
    for (let j = 0; j < quantity; j++) {
      let x = 70 + j * 91;
      let y = 130;
      let newBlock = new GameObject(
        new Vector(x, y),
        blockWidth,
        blockHeight,
        "white",
      );
      newBlock.setSprite(blockSprite);
      newBlock.setCollider(70, 40);
      newBlock.updateCollider();
      this.blocks.push(newBlock);
    }
  }

  restart() {
    this.score = 0;
    this.lives = 3;
    this.level = 1;
    this.time = 0;
    this.lastRowTime = 0;
    this.gameOver = false;
    this.inPlay = false;
    ballSpeed = initialSpeed;
    this.initObject();
    this.createLvl(3);
  }

  createEventListeners() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowLeft") this.addKey("left", this.pad);
      if (event.key == "ArrowRight") this.addKey("right", this.pad);
    });
    window.addEventListener("keyup", (event) => {
      if (event.key == "ArrowLeft") this.delKey("left", this.pad);
      if (event.key == "ArrowRight") this.delKey("right", this.pad);

      if (event.key == " ") {
        if (this.gameOver) {
          this.restart();
        } else if (!this.inPlay && !this.gameOver) {
          this.ball.serve();
          this.inPlay = true;
        }
      }
    });
  }

  addKey(direction, object) {
    if (!object.keys.includes(direction)) {
      object.keys.push(direction);
    }
  }

  delKey(direction, object) {
    if (object.keys.includes(direction)) {
      object.keys.splice(object.keys.indexOf(direction), 1);
    }
  }

  update(deltaTime) {
    if (this.gameOver) return;

    this.time += deltaTime;

    if (this.time - this.lastRowTime >= 15000) {
      this.addNewRow();
      this.lastRowTime = this.time;
    }

    this.pad.update(deltaTime);
    this.ball.update(deltaTime);

    if (this.inPlay) {
      if (boxOverlap(this.ball, this.borderTop)) {
        impactAudio();
        this.ball.velocity.y *= -1;
      }
      if (boxOverlap(this.ball, this.borderLeft) ||boxOverlap(this.ball, this.borderRight)) {
        impactAudio();
        this.ball.velocity.x *= -1;
      }
    }

    if (boxOverlap(this.ball, this.pad)) {
      this.ball.velocity.y *= -1;
      this.ball.position.y = this.pad.position.y - this.pad.halfSize.y - this.ball.radius;
      ballSpeed *= speedIncrease;
      impactAudio();
    }

    let remainingBlocks = [];

    for (let i = 0; i < this.blocks.length; i++) {
      let currentBlock = this.blocks[i];

      if (currentBlock.position.y > this.pad.position.y - 20) {
        this.gameOver = true;
        return;
      }

      if (boxOverlap(this.ball, currentBlock)) {
        impactAudio();
        this.ball.velocity.y *= -1;
        this.score += 20;
      } else {
        remainingBlocks.push(currentBlock);
      }
    }

    this.blocks = remainingBlocks;

    if (this.blocks.length == 0) {
      this.level++;
      this.lives = 3;
      this.time = 0;
      this.inPlay = false;
      this.lastRowTime = this.time;
      this.createLvl(2 + this.level);
    }

    if (this.ball.position.y > canvasHeight) {
      this.lives -= 1;
      this.inPlay = false;
      if (this.lives <= 0) {
        this.gameOver = true;
      }
    }
  }
  draw(ctx) {
    if (background) {
      background.draw(ctx);
    }

    ctx.textAlign = "left";
    let totalSeconds = Math.floor(this.time / 1000);
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;
    let timeString = mins + ":" + (secs < 10 ? "0" : "") + secs;

    this.scoreLabel.draw(ctx, "Score: " + this.score);
    this.timeLabel.draw(ctx, timeString);
    this.levelLabel.draw(ctx, "Level: " + this.level);

    let hearths = "";
    for (let i = 0; i < this.lives; i++) {
      hearths += "❤️";
    }
    this.livesLabel.draw(ctx, hearths);

    for (let i = 0; i < this.actors.length; i++) {
      this.actors[i].draw(ctx);
    }
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].draw(ctx);
    }
    if (this.gameOver) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.font = "bold 40px 'Arial', cursive";
      ctx.fillText("GAME OVER", canvasWidth / 2, canvasHeight / 2);

      ctx.font = "20px 'Arial";
      ctx.fillText(
        "Final Score: " + this.score,
        canvasWidth / 2,
        canvasHeight / 2 + 40,
      );

      ctx.font = "20px 'Arial'";
      ctx.fillText(
        "Press SPACE to restart",
        canvasWidth / 2,
        canvasHeight / 2 + 60,
      );
    }
  }
}

function main() {
  const canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  ctx = canvas.getContext("2d");
  game = new Game();
  drawScene(0);
}

function drawScene(newTime) {
  let deltaTime = newTime - oldTime;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  game.update(deltaTime);
  game.draw(ctx);
  oldTime = newTime;
  requestAnimationFrame(drawScene);
}

window.onload = main;
