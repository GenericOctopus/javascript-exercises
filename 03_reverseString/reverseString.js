const reverseString = function(subject) {

    let subArray = Array.from(subject);

    let reversedSub = subArray.reverse().join('');

    return reversedSub;

};

// Do not edit below this line
module.exports = reverseString;
