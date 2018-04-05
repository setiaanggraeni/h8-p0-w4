function hitungHuruf(kata) {
  var count=0;
  var hasil=[];
  var mostFrequent=1;
  var item=[];
  kata= kata.split(" ");

  for (var i=0; i<kata.length; i++){
    var kataBaru=kata[i]
    // console.log(kataBaru)
    for (var x=0; x<kataBaru.length; x++){
      for (var j=x; j<kataBaru.length; j++){
      // console.log(kataBaru[j])
        if (kataBaru[j]===kataBaru[x]){
          count+=1
          // console.log(count)
        }
        if (mostFrequent < count) {
            mostFrequent = count;
              if (item.length<1){
                item.push(kataBaru);
              }
        }
      }
    count=0;
    }
  }
  return item.join();
}
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau