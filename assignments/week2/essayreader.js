const { count } = require("console");
// Loads up the Node FS Module, so it can be used in this script.

const fs = require("fs");

// process.argv has the command line information that was used to run this script.


let arguments = process.argv;

let history;
//Check if we have an existing file called"history.txt"
if(fs.existsSync("history.txt")) {
    //..If it does find, read it and load it into the variable history.
    history = fs.readFileSync("history.txt","utf-8");
} else {
    // ..if it doesn't, we create the file, and write an empthy to fit.
    fs.writeFileSync("history.txt","", "utf-8");
}

//console.log(arguments);

let fileName = arguments[2];

//console.log(fileName);

const fileExists = fs.existsSync(fileName);

if (fileExists === false) {
    console.log("Sorry, that file doesn't exist! Check your filepath");
    return;
}

// this method allows us to read a file.
//let fileContents =fs.readFileSync("essay.txt", "utf-8");
let fileContents =fs.readFileSync(fileName, "utf-8");

//console.log(fileContents);

let contentArray = fileContents.split(""); //spilt Array convert to letter

//console.log(contentArray);

let letterCount = 0;

for (let i = 0; i < contentArray.length; i++) {

    if(contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!") {
        continue;
    } else {
        letterCount ++;
    }


}

console.log(letterCount)
console.log(`The file ${fileName} contains a total of ${letterCount} letters.`);



let firstSentence = `The file ${fileName} contains a total of ${letterCount} letters.`;

console.log(firstSentence);
// Count Letters END

// Count Word START


//let wordArray = fileContents.split(" ");

//let wordCount = 0;

/*if (let i = 0; i < wordArray.length; i++) {
    wordCount ++
}*/

let wordArray = fileContents.split(" ");

console.log(`It ha a total of ${wordArray.length} words in it.`);

//Count Words END
//Count Sentences START
//let sentenceArray = fileContents.split(".");

let sentenceCount = 0;

for (let i =0; i < contentArray.length; i ++) {
    if (contentArray[i] === "." || contentArray[i] === "!" ||  contentArray[i] === "?") {
       
        sentenceCount++;
    }
}

//console.log(sentenceCount);
console.log(`It has a total of ${sentenceCount} sentences in it.`);