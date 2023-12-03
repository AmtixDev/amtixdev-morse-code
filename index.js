const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--.",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
};

function textToMorse(text) {
  return text
      .toUpperCase()
      .split('')
      .map((char) => {
          if (char === ' ') return ' ';
          return morseCodeMap[char] || char;
      })
      .join(' ');
}

function morseToText(morse) {
  const morseMap = Object.entries(morseCodeMap).reduce(
      (acc, [char, code]) => ({
          ...acc,
          [code]: char,
      }),
      {}
  );

  return morse
      .split(' ')
      .map((code) => morseMap[code] || code)
      .join('');
}

module.exports = { textToMorse, morseToText };
