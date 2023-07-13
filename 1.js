//Cek palindrome

const cekPalindrome = (string) => {
  let check = string.split("").reverse().join("");
  if (check.toLowerCase() === string.toLowerCase()) {
    console.log("Ini adalah palindrome");
  } else {
    console.log("Bukan palindrome");
  }
};

cekPalindrome("Malam");

//Reverse String

const reversed = (string) => {
  let reverseStr = string.split(" ").reverse().join(" ");
  console.log(reverseStr);
};

reversed("aku belajar javascript");
