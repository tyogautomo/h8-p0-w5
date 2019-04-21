function totalDigitRekursif(angka) {

    var toStr = angka.toString();
    var total = 0;

    if (toStr.length == 0) {
        return 0
    } else {
        total += parseInt(toStr[0]);
        return total + totalDigitRekursif(toStr.slice(1))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5