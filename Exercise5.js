function ubahHuruf(kata) {
    //-> /[a-zA-Z]/g digunakan untuk menentukan huruf besar atau kecil yg akan dirubah 
    // dan (g) digunkan untuk membuat global jd bisa d akses dari mana aja. 
    // kalau misal ditulis a-z doank hruf kecil jadi yang akan dirubah cm yang kecil doank
    // tapai akalu ada keterangan a-zA-Z maka harus besar kecil akan dirubah semua
    return kata.replace(/[a-zA-Z]/g, function(i){
        return String.fromCharCode(i.charCodeAt(0)+1);
    });
} 

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu