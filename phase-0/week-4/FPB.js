
// Logic Challenge - Faktor Persekutuan Terbesar

// Problem
// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
    // you can only write your code here!
    let subFactor1 = getSubFactor(angka1)
    let subFactor2 = getSubFactor(angka2)
    let result = []

    for (let i = 0; i < subFactor1.length; i++) {
        for (let j = 0; j < subFactor2.length; j++) {
            if (subFactor1[i] == subFactor2[j]) {
                result.push(subFactor1[i])
            }
        }
    }
    return result[result.length - 1]
}

function getSubFactor(angka) {
    let subFactor = []
    for (let i = 0; i < angka; i++) {
        if (angka % i == 0) {
            subFactor.push(i)
        }
    }
    return subFactor
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1