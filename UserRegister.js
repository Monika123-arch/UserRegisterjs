//UC2

const prompt = require('prompt-sync')({sigint: true}); 
var regPattern;
let namePattern = "^[A-Z]{1}[a-z]{3,}";

validation = function(data,pattern){
    regPattern = new RegExp(pattern);
    result = regPattern.test(data);
    if(result == true){
        console.log("Validated.");
    }
    else {
        console.log("Please enter correct format!");
        return false;
    }
}


let getData = function(string, pattern){
    let readData = prompt(string);
    let result = validation(readData,pattern);
  
    while(result == false){
        if(result == true){
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation(readData,pattern);
            return result;
        }
       
    }
}

getData('Enter the first name:',namePattern);
getData('Enter the last name:',namePattern);
