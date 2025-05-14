const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const resultEl = document.getElementById("result");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]=<>/,.~";

function generatePassword(length, useUpper, useLower, useNum, useSym) {
  let chars = "";
  if (useUpper) chars += lettersUpper;
  if (useLower) chars += lettersLower;
  if (useNum) chars += numbers;
  if (useSym) chars += symbols;

  if (chars === "") return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const useUpper = uppercaseEl.checked;
  const useLower = lowercaseEl.checked;
  const useNum = numbersEl.checked;
  const useSym = symbolsEl.checked;

  const password = generatePassword(length, useUpper, useLower, useNum, useSym);
  resultEl.value = password;
});

copyBtn.addEventListener("click", () => {
  resultEl.select();
  document.execCommand("copy");
  copyBtn.innerText = "✅ Copiado!";
  setTimeout(() => (copyBtn.innerText = "📋 Copiar"), 2000);
});
