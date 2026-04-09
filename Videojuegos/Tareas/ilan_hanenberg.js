/*
 * Example functions to practice JavaScript
 *
 * Ilan Hanenberg Wasserman
 * 2026-03-26
 */

"use strict";
//Función acepta strings, regresa char
//Encuentra los char que no se repiten en un string
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
//console.log(firstNonRepeating('abacddbec'));}

//Acepta arrays, regresa arrays
//Ordena un array de números de menos a mayor basado en el algoritmo bubble sort
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

//La función acepta arrays y regresa un nuevo array
//La función invierte los elementos de un array y regresa el array ordenado como un nuevo array
function invertArray(arr) {
  let newArray = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray[j] = arr[i];
    j++;
  }
  return newArray;
}

//La función acepta arrays y regresa el array modificado
//La función invierte los elementos y regresa el array ordenado
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

//La función recive strings y regresa un string
//La función capitaliza la primera letra de cadenas de arrays
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

//Recibe dos números y regresa uno
//La función busca el multiplo común denominador de dos números.
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

//Recibe strings y regresa strings
//La función convierte un string a hacker speak
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

//Recibe un número y regresa un array
//Encuentra los factores de un número proporcionado y los regresa como un array
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

//Acepta arrays y regresa un array
//La función detecta los elementos en un array y no incluye los duplicados
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

//Recibe un array de strings y regresa un número
//LA función encuentra la longitud del string más corto de un array
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

//Recibe un string y regresa un valor booleano
//La función revisa sin un string es un palíndromo
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

//Recibe un array de strings y regresa un nuevo array ordenado
//La función ordena alfabéticamente los strings de un array utilizando Quick Sort
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

//Recibe un array de números y regresa un array
//La función calcula la media y moda de los números de un array
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
      mode = num;
    }
  }
  return [mean, mode];
}

// console.log(stats([8, 4, 2, 6, 8, 13, 17, 2, 4, 8])) //[7.2, 8]
// console.log(stats([])); //[0, 0]

//Recibe un array de strings y regresa un string
//La función encuentra el string que aparece más veces en el array
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

//Recibe un número y regresa un valor booleano
//La función revisa si el número es una potencia de 2
function isPowerOf2(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

//Recibe un array de números y regresa un array nuevo
//La función ordena los números de manera descendiente con un algoritmo Quick Sort
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