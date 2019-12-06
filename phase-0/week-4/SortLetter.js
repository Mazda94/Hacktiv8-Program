// Logic Challenge - Mengurutkan Abjad

// Problem
// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. 
// Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

function urutkanAbjad(str) {
    // you can only write your code here!
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let temp = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < abjad.length; j++) {
            if (str[i] === abjad[j]) {
                temp.push(str[i])
            }
        }
    }

    temp.sort()
    let result = ''
    for (let i = 0; i < temp.length; i++) {
        result += temp[i]
    }
    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'