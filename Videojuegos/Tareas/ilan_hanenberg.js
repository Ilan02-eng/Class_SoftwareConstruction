/*
 * Example functions to practice JavaScript
 *
 * Ilan Hanenberg Wasserman
 * 2026-03-26
 */

"use strict";

function firstNonRepeating(string) {
  const conteo = {};

  for (let char of string) {
    conteo[char] = (conteo[char] || 0) + 1;
  }

  for (let char of string) {
    if (conteo[char] === 1) {
      return char;
    }
  }
  return undefined;
}

//console.log(firstNonRepeating('abacddbec'));

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//bubbleSort([6, 4, 2])

function invertArray(arr) {
  let newArray = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[j] = arr[i];
    j++;
  }
  return newArray;
}

function invertArrayInplace(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function capitalize(text) {
  if (text === "") {
    return "";
  }
  let result = "";
  for (let i = 0; i < text.length; i = i + 1) {
    if (i === 0 || text[i - 1] === " ") {
      result += text[i].toUpperCase();
    } else {
      result += text[i];
    }
  }
  return result;
}

//console.log(capitalize("hola me llamo ilan"));
//console.log(capitalize(""));

function mcd(a, b) {
  while (b != 0) {
    let residuo = a % b;
    a = b;
    b = residuo;
  }
  return a;
}

//console.log(mcd(40, 12)); //4
//console.log(mcd(12, 3)); //3

function hackerSpeak(text) {
  let finalText = "";
  const map = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };
  for (const letter of text.toLowerCase()) {
    finalText += map[letter] ?? text[finalText.length];
  }
  return finalText;
}

//console.log(hackerSpeak("JavaScript es divertido"));

function factorize(num) {
  const factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
}

//console.log(factorize(12))
//console.log(factorize(20))

function deduplicate(arr) {
  const seen = {};
  const result = [];

  for (let element of arr) {
    if (!seen[element]) {
      result.push(element);
      seen[element] = true;
    }
  }
  return result;
}

//console.log(deduplicate([1, 0, 1, 1, 0, 0]));

function findShortestString(string) {
  if (string.length === 0) return 0;
  let min = string[0].length;
  for (let str of string) {
    if (str.length < min) {
      min = str.length;
    }
  }
  return min;
}

function isPalindrome(string) {
  const text = string.toLowerCase();
  let palindromo = true;
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      palindromo = false;
      break;
    }
  }
  return palindromo;
}

// console.log(isPalindrome("Ojo"));
// console.log(isPalindrome("Salas"));
// console.log(isPalindrome("Hola"));

function sortStrings(string) {
  if (string.length <= 1) {
    return string;
  }
  const pivot = string[0];
  const left = [];
  const right = [];

  for (let i = 1; i < string.length; i++) {
    if (string[i] < pivot) {
      left.push(string[i]);
    } else {
      right.push(string[i]);
    }
  }
  return [...sortStrings(left), pivot, ...sortStrings(right)];
}

function stats(numbers) {
  let mean = 0;
  let mode = 0;
  if (numbers.length === 0) {
    return [mean, mode];
  }
  let addTotal = 0;
  for (let num of numbers) {
    addTotal += num;
  }
  mean = addTotal / numbers.length;

  const conteo = {};
  let repetitions = 0;
  for (let num of numbers) {
    conteo[num] = (conteo[num] || 0) + 1;
    if (conteo[num] > repetitions) {
      repetitions = conteo[num];
      mode = Number(num);
    }
  }
  return [mean, mode];
}

// console.log(stats([8, 4, 2, 6, 8, 13, 17, 2, 4, 8])) //[7.2, 8]
// console.log(stats([])); //[0, 0]

function popularString(list) {
  if (list.length === 0) return "";
  const frequent = {};
  let max = 0;
  let stringMax = "";
  for (const str of list) {
    frequent[str] = (frequent[str] || 0) + 1;
    if (frequent[str] > max) {
      max = frequent[str];
      stringMax = str;
    }
  }
  return stringMax;
}

function isPowerOf2(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

function sortDescending(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[0];
  const left = [];
  const right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...sortDescending(right), pivot, ...sortDescending(left)];
}

export {
  firstNonRepeating,
  bubbleSort,
  invertArray,
  invertArrayInplace,
  capitalize,
  mcd,
  hackerSpeak,
  factorize,
  deduplicate,
  findShortestString,
  isPalindrome,
  sortStrings,
  stats,
  popularString,
  isPowerOf2,
  sortDescending,
};
