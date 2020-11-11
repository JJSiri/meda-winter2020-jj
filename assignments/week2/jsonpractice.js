// Rule 1: All keys MUST be in quots.
// Rule 2: No functions allowed.
// Rule 3: Only one "object".
// Rule 4: no comments.

const fs = require("fs");

const fileExists = fs.existsSync("example.json");

let contents;

if (fileExists) {
    contents = fs.readFileSync("example.json", "utf-8");
} else {
    console.log("File does not exist. Quitting...");
    return;
}

console.log(contents) = JSON.parse(contents);

console.log(typeof contents);
console.log(typeof contentsObject);

const myObject = {
    "lastName" : "Doe",
    "ability" : function () {
        console.log(this.lastName + "is eating food.");
    },
    possessions: ["car", "house","refrigerator"],
    deceased: false,
    age:45,
    "is fun": false,
    lastUpdate "11/4/2020",
    lastUpdateObject:new Date(Date.now())
};

let jsonObectConverted = JSON.stringify(myObject);

console.log(jsonObjectConverted);

fs.writeFileSync("saveJSON.jason",jsonObjectConverted,"utf-8");

myObject.ability();

myObject.age;
myObject["is fun"];

let parsedStringifiledJSON = fs.readFileSync("savedJSON.Json","utf-8");

parsedStringifieldJSON =JSON.parse(parsedStringifiedJSON);