function angkaPrima(angka) {
    var bilangan='';
  for (var i=2; i<=angka; i++){
    if (i>=2){
      bilangan=true;
        for (j=2; j<i; j++)
        if (i%j===0){
            bilangan=false;
        }
    }
  }
  return bilangan;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false