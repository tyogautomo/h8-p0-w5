function hapusSimbol(str) {
    var newStr = "";
    var noSymbol = str.match(/[A-z]|[0-9]/g)

    for (var i = 0; i < noSymbol.length; i++) {
        newStr += noSymbol[i]
    }

    return newStr;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100