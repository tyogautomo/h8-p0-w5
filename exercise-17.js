function kaliTerusRekursif(angka) {

    var toStr = angka.toString();
    var total = 1;

    if (toStr.length == 1) {
        return parseInt(toStr[0])
    } else if (toStr.length > 1) {

        for (let i = 0; i < toStr.length; i++) {
            total *= parseInt(toStr[i]);
        }

        if (total.toString().length > 1) {
            return kaliTerusRekursif(total);
        } else {
            return total
        }
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6