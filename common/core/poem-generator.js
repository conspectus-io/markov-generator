let sampleText = "Ever since I left the city, you, you, you You and me we just don't get along";

// parseText function accepts word corpus string and returns array 
// of uniformly formatted words with no numbers or punctuation
let parseText = (string) => string.toLowerCase().replace(/[^a-zA-Z 0-9]+/g, '').split(' ');

// generateWordPairs function accpets word corpus string
// return-s object containing key value pairs of consecutive words
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
        var key, randomPos, objLength = 0,
            pos = 0;

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

    // generate poem with randomKeySelector
    for (let i = 0; i < numOfWords; i++) {
        poem = `${poem}${randomKeySelector(chainObj)} `;
    }

    let poemArray = poem.split(' ');

    // modify poem to prevent consecutive duplicate words and nonsensical first/last words
    for (let i = 0; i < poemArray.length; i++) {
        if (poemArray[i] === poemArray[i + 1]) {
            poemArray[i + 1] = randomKeySelector(chainObj);
        }
    }

    let firstWord = poemArray[0];
    let lastWord = poemArray[poemArray.length - 2];

    if (/(s|and)/.test(firstWord)) {
        // console.log(poemArray[0]);

        //*************poemArray[0] = 'REPLACED';***********************

        // poemArray[poemArray.length - 2] = 'REPLACED';
    }

    // for (let i = 0; i < poemArray.length; i++) {
    //     if (i === 0 || i === poemArray.length - 2) {
    //         poemArray[i].replace(/(s|and |it |is |a )+/g, 'REPLACED');
    //     }
    // }

    // poemArray[0].replace(/(s|and)+/g, 'REPLACED');
    // poemArray[poemArray.length - 2].replace(/(s|and|it|is|a)+/g, 'REPLACED');

    // console.log('first word:', poemArray[0], 'last word:', poemArray[poemArray.length - 2]);
    poem = poemArray.join(' ');

    return poem;
};
// TODO: prevent nonsensical first and last words (ex: poem should not start or end with 'and')
// prevent same word next to each other

// generatePoem function accepts word corpus string and a number of lines to generate
let generatePoem = (corpus, numOfLines) => {
    let poem = '';

    for (let i = 0; i < numOfLines; i++) {
        poem = `${poem}${writeLine(generateWordPairs(corpus), 8)}
`;
    }
    return poem;
};


console.log(generatePoem(sampleText, 3));
// console.log(writeLine(generateWordPairs(sampleText), 8));
// console.log(parseText(sampleText));
// console.log(generateWordPairs(sampleText));
