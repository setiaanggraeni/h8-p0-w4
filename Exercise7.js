function digitPerkalianMinimum(angka) {
  var array=[];
  var perkalian="";
  var hasil=0;
  var nilai;
  for (var i=1; i<=angka; i++){
    if (angka%i===0){
      nilai =i;
      perkalian+=nilai;
      hasil=angka/i;
      perkalian+=hasil;
      // console.log(perkalian)
      array.push(perkalian.length);
      perkalian="";
    }
  }
  // console.log(array)
  var result=array[0]
  for (var j=0; j<array.length; j++){
    if (result>array[j]){
      result=array[j];
    }
  }
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2