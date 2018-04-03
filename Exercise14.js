function sorting(arrNumber) {
  for (var i=0; i<arrNumber.length; i++){
    for (var j=i+1; j<arrNumber.length; j++){
      if (arrNumber[i] < arrNumber[j]){
        temp=arrNumber[j];
        arrNumber[j]=arrNumber[i];
        arrNumber[i]=temp;
      }
    }
   
  }
   return arrNumber;
}

function getTotal(arrNumber) {
  var nilaiMax=arrNumber[0];
  var jumlahNilaimax=0;
    for (var i=0; i<arrNumber.length; i++){
      if (nilaiMax === arrNumber[i]){
        nilaiMax = arrNumber[i];
        jumlahNilaimax+=1;
      }
    }
  return ("angka paling besar adalah " + nilaiMax + " dan jumlah kemunculan sebanyak " + jumlahNilaimax + " kali");

}

function mostFrequentLargestNumbers(arrNumber) {
   if (arrNumber.length===0){
    return ("''");
  }
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''