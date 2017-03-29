let sampleText = "Ever since I left the city, you, you, you You and me we just don't get along";

// parseText function accepts word corpus string and returns array 
// of uniformly formatted words with no numbers or punctuation
let parseText = (string) => string.toLowerCase().replace(/[^a-zA-Z 0-9]+/g,'').split(' ');

// generateWordPairs function accpets word corpus string
// returns object containing key value pairs of consecutive words
let generateWordPairs = (text) => {
    let parsedArr = parseText(text);
    let pairObj = {};

    for (let i = 0; i < parsedArr.length; i++) {
        pairObj[parsedArr[i]] = [parsedArr[i + 1]];
    }
    return pairObj;
};

// writeLine function accepts Markov Chain object and length of words n
// returns a string of poetry
// uses helper function to randomly choose word from its Markov Chain obj
let writeLine = (chainObj, numOfWords) => {
    let poem = '';

    let randomKeySelector = (chainObj) => {
        var key, randomPos, objLength = 0, pos = 0;
       
        for (key in chainObj) {
            if (chainObj.hasOwnProperty(key)) {
                objLength += 1;
            }
        }
       
        randomPos = Math.floor(Math.random() * objLength);
       
        for (key in chainObj) {
            if (chainObj.hasOwnProperty(key)) {
                if (pos === randomPos) {
                    return key;
                }
                pos += 1;
            }
        }

    };

    for (let i = 0; i < numOfWords; i++) {
        poem = `${poem}${randomKeySelector(chainObj)} `;
    }
    return poem;
};
// TODO: prevent nonsensical first and last words (ex: poem should not start or end with 'and')


console.log(writeLine(generateWordPairs(sampleText), 8));
// console.log(parseText(sampleText));
// console.log(generateWordPairs(sampleText));


