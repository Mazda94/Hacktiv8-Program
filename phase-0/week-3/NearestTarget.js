// Logic Challenge - Target Terdekat
// 
// 
// Problem
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
// Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
    // you can only write your code here!
    let o = 0
    let x = 0

    let foundO = false
    let foundX = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            o = i
            foundO = true
        } else if (arr[i] == 'x') {
            x = i
            foundX = true
        }
        if (foundO && foundX) {
            break
        }
    }
    if (!foundX) {
        return 0
    } else {
        return Math.abs(o - x)
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2