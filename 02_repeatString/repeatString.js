const repeatString = function(inputString, inputNumber) {

    var repeatString = '';

    if (inputNumber < 0){
        return "ERROR";
    } 


    for (let index = 0; index < inputNumber; index++) {
        
        repeatString = repeatString + inputString
    }

    return repeatString;

};

// Do not edit below this line
module.exports = repeatString;
