import wordBank from "./wordle-bank.txt";
import fourLetterBank from './4letter-bank.txt';
// import threeLetterBank from './3letter-bank.txt'

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const fourBoardDefault = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

export const threeBoardDefault = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];


// using a set because an array will loop through the 
// the whole array, a set will find whatever is in it.
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};

// export const generateThreeLetterSet = async () => {
//   let wordSet;
//   let todaysWord;
//   await fetch(threeLetterBank)
//     .then((response) => response.text())
//     .then((result) => {
//       const wordArr = result.split("\n");
//       todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
//       wordSet = new Set(wordArr);
//     });
//   return { wordSet, todaysWord };
// };

export const generateFourLetterSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(fourLetterBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  return { wordSet, todaysWord };
};
