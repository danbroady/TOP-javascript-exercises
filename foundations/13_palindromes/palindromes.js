const palindromes = function (word) {
    let alphanumerics = '0123456789abcdefghijklmnopqrstuvwxyz';
    let forwardWord = word.toLowerCase().split("")
        .filter(char => alphanumerics.includes(char))
        .join("");
    let reverseWord = forwardWord.split("").reverse().join("");
    return forwardWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
