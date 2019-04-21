function changeVocals(str) {

    var newStr = ""

    for (let i = 0; i < str.length; i++) {

        if (str[i] == "a" || str[i] == "A") {
            if (str[i] == "A") {
                newStr += "B"
            } else {
                newStr += "b"
            }
        } else if (str[i] == "i" || str[i] == "I") {
            if (str[i] == "I") {
                newStr += "J"
            } else {
                newStr += "j"
            }
        } else if (str[i] == "u" || str[i] == "U") {
            if (str[i] == "U") {
                newStr += "V"
            } else {
                newStr += "v"
            }
        } else if (str[i] == "e" || str[i] == "E") {
            if (str[i] == "E") {
                newStr += "F"
            } else {
                newStr += "f"
            }
        } else if (str[i] == "o" || str[i] == "O") {
            if (str[i] == "O") {
                newStr += "P"
            } else {
                newStr += "p"
            }
        } else {
            newStr += str[i]
        }

    }

    return newStr;
}

// console.log(changeVocals('Sergei Dragunov'));
//----------------------------------------------------------------------------------
function reverseWord(str) {

    var newStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return newStr;
}

// console.log(reverseWord('Sergei Dragunov'));
//----------------------------------------------------------------------------------
function setLowerUpperCase(str) {

    var newStr = "";

    var lowCase = "abcdefghijklmnopqrstuvwxyz"
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lowCase.length; j++) {
            if (str[i] == lowCase[j]) {
                newStr += upCase[j]
            } else if (str[i] == upCase[j]) {
                newStr += lowCase[j]
            } else if (str[i] == " ") {
                newStr += " "
                break;
            }
        }
    }

    return newStr;
}

// console.log(setLowerUpperCase('Sergei Dragunov'));
//----------------------------------------------------------------------------------
function removeSpaces(str) {

    var newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr += str[i]
        }
    }

    return newStr;
}

// console.log(removeSpaces('Sergei Dragunov'))
// console.log("\n");

//----------------------------------------------------------------------------------
function passwordGenerator(name) {
    var changeVoc = changeVocals(name);
    var reverse = reverseWord(changeVoc);
    var setLowUp = setLowerUpperCase(reverse);
    var remove = removeSpaces(setLowUp);

    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } else {
        return remove;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'