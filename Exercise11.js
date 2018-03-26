function changeMe(arr) {
    
  for (var i=0; i<arr.length; i++){
      var data = {};

      data.firstName = arr[i][0];
      data.lastName= arr[i][1];
      data.gender= arr[i][2];

      if (arr[i][3] === undefined){ // undefind ini untuk menjalaskan jika value arr kosong atau tdk ada data
          data.age =  'Invalid Birth Year';
      } else {
          data.age = 2018- arr[i][3]
      }
      console.log((i+1) + ". " + data.firstName +" "+ data.lastName);
      console.log(data)
  }
     
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""