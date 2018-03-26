function shoppingTime(memberId, money) {
    if (memberId==="" || memberId=== undefined){
        return ("Mohon maaf, toko X hanya berlaku untuk member saja");
    }
    if (money <50000){
        return ("Mohon maaf, uang tidak cukup");
    }

    var namaBarang= [ 
        {
            brand: 'Sepatu Stacattu',
            harga: 1500000
        },
        {
            brand: 'Baju Zoro',
            harga: 500000
        },
        {
            brand: 'Baju H&N',
            harga: 250000
        },
        {
            brand: 'Sweater Uniklooh',
            harga: 175000
        },
        {
            brand: 'Casing Handphone',
            harga: 50000
        }
    ];
var objectResult={};
objectResult.memberId = memberId;
objectResult.money = money;

var listPurchased=[];
for (var i=0; i<namaBarang.length; i++){
    if (money >= namaBarang[i].harga){
        listPurchased.push(namaBarang[i].brand);
        money -= namaBarang[i].harga;
    }
}

objectResult.listPurchased = listPurchased;
objectResult.changeMoney=money;
   return objectResult; 
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 } // changeMoney ini pakai keyName jadi pakai objectResult
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja