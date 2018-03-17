function urutkanAbjad(str) {
    var kataBaru=str.split(""); // untuk misahin perkata dulu
    return kataBaru.sort().join(""); // sort untuk ngurutin kata habis itu d join untuk gabungin
  }
  
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'