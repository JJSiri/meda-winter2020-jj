const fs = require("fs");


let arguments = process.argv;

const fileExists = fs.existsSync("argumentdata.json");

let contents;

if(fileExists) {
    contents = fs.readFileSync("argumentdata.json", "utf-8");
} else {
    fs.writeFileSync("argumentdata.json", `{
        "data" : []
    }`, "utf-8");
}
//let contents = argumentdata;

//let dataConverted = JSON.parse(argumentdata);

//console.log(contents);

let thirdArg = arguments[2];
 //console.log(fileName);

 let fileName = arguments[2];

 // console.log(fileName);
 
 
 if (fileExists === false) {
     console.log("Sorry, that file doesn't exist! Check your filepath.");
     //return;
 } else {
    argumentdata.jsonConverted.data.push(thirdArg);
}

 
  
  
  // This method allows us to read a file.
  //let fileContents = fs.readFileSync(jsonObjectConverted, "utf-8");
  
  // console.log(fileContents);
  //let fileContents = fs.readFileSync(fileName, "utf-8");
  

  //let secondSentence = `It has a total of ${wordArray.length} words in it.`;

 // console.log(secondSentence);
  
  //argumentdata = argumentdata.JSON + "\n" + secondSentence;
  

  
  // This method allows us to read a file.
  //let fileContents = fs.readFileSync(jsonObjectConverted, "utf-8");
  
  // console.log(fileContents);
 //let jsonObjectConverted = JSON.stringify(arugumentdataConverted);

//console.log(jsonObjectConverted);

//fs.writeFileSync("savedJSON.json",jsonObjectConverted,"utf-8");
 
let parsedStringifiedJSON = fs.readFileSync("savedJSON.json", "utf-8");

parsedStringifiedJSON = JSON.parse(parsedStringifiedJSON);

fs.writeFileSync("argumentdata.json", "utf-8");
console.log(`${thirdArg} you already add file in savedJSON`);