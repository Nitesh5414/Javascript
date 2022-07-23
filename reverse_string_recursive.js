const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
};

console.log(reverseString('hello world!'));