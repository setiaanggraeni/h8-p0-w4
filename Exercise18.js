function kaliTerusRekursif(angka) {
    angka=angka.toString()
    if (angka.length===1){
      return Number(angka)
    }
    var hasil=0;
    if (angka.length > 1) {
        var result=1
        for (var i=0; i<angka.length; i++){
            // console.log(angka[i])
            result *= angka[i]
        }
        return kaliTerusRekursif(result)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6