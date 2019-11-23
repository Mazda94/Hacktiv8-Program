// Mengakses Nilai Dalam Array

// Objectives
// Mengetahui properties Pada Array
// Mengerti Cara Mengakses Nilai Dalam Array
// Directions
// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

function reversWord(kata) {
    var newWord = ''
    var init = kata.length - 1
    for (let i = init; i >= 0; i--) {
        newWord += kata[i]
    }
    console.log("Kata sebelum di balik adalah", kata)
    return newWord
}

console.log(reversWord('Muhammad Ali Mazhuda'), '<< ini kebalikannya')