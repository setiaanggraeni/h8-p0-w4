function checkAB(num) {
    // var hurufA= num.indexOf("a");
    // var hurufB= num.indexOf("b");
    var countA="";
    var countB="";
    var jarakAB=0;
    var kataA="";
    var kataB="";
    //var count=0;
    for (var i=0; i<num.length; i++){
        //if (num [i]==="a");
        // if (num[i]=== " "){
        //     countA=[i-1];
        //     countB=[i-1];
        //     // console.log(countA)
        //     // console.log(countB)
        // }
        if (num[i]!=="a"){
            countA+=num[i];
          //  console.log(countA)
        }
        else if (num[i]!=="b"){
            countB+=num[i];
           // console.log(countB)
        }
        if (num[i]==="a"){
            kataA=countA;
            break;
        }
        else if (num[i]==="b"){
            kataB=countB;
            break;
        }
        jarakAB=countB-countA;
        console.log(jarakAB)
        if (jarakAB >0 && jarakAB <=4 ) {
            return true;
        }
        else{
            return false;
        }
    }
    // return kataA;
    // return kataB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
// console.log(checkAB('i am sick')); // false
// console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false