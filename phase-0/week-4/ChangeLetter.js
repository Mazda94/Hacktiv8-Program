// Logic Challenge - Ubah Huruf

// Problem
// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
    // you can only write your code here!
    // inisialisasi abjad
    let letter = 'abcdefghijklmnopqrstuvwxyz'

    // variable penampung
    let temp = ''

    // looping kata
    for (let i = 0; i < kata.length; i++) {
        // console.log(kata[i])
        // looping abjad
        for (let j = 0; j < letter.length; j++) {
            // cek apakah abjad[j] sama dengan kata[i]
            if (letter[j] === kata[i]) {
                // jika ya, cek lagi apakah j == panjang abjad - 1/ j == 25
                // pengecekan ini berlaku untuk kata[i] = z
                if (j === letter.length - 1) {
                    temp += letter[j - (letter.length - 1)]
                } else {
                    temp += letter[j + 1]
                }
            }
        }
    }
    return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu