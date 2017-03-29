let testString = 'where we went with phill Went We will';

let replaceWord = (string) => string.replace(/(s|we |We )+/g, 'REPLACED ');

console.log(replaceWord(testString));