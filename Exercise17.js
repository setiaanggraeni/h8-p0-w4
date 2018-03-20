function totalDigitRekursif(angka) {
    var nilai=String(angka);
    var jumlah=0;
      for (var i=0; i<nilai.length; i++){
        var x= Number(nilai[i]);
        jumlah += x;
      }
   return jumlah;   
  }
  
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
  
  