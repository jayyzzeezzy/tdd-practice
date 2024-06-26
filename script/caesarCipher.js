function caesarCipher(string, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let str = string.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i]) {
            let index = alphabet.indexOf(str[i]);
            result += alphabet[(index + key) % 26];
        } else {
            result += " ";
        }
    }
    return result;
};

export { caesarCipher };