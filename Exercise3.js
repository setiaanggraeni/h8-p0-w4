function cariMedian(arr) {
    // median adalah nilai aray yg dibagian tengah
    var median = 0, panjangArr = arr.length;
        if (panjangArr % 2 === 0) {
            // average of two middle numbers
            median = (arr[panjangArr / 2 - 1] + arr[panjangArr / 2]) / 2;
        } else { // is odd
            // middle number only
            median = arr[(panjangArr - 1) / 2];
        }
 
    return median;
}

  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5