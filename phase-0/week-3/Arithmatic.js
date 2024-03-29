// Logic Challenge - Tentukan Deret Aritmatika

// Problem
// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebut akan mengembalikan truejika array dari parameter tersebut merupakan deret aritmatika. 
// Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
// Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 
// [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.


function tentukanDeretAritmatika(arr) {
    var beda = arr[arr.length - 1] - arr[arr.length - 2]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] != undefined) {
            if (beda != arr[i + 1] - arr[i]) {
                return false
            } else {
                return true
            }
        }
    }
}

// TEST CASES
console.log('Apakah deret ini merupakan deret aritmatika "1, 2, 3, 4, 5, 6" ?', tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log('Apakah deret ini merupakan deret aritmatika "2, 4, 6, 12, 24" ?', tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log('Apakah deret ini merupakan deret aritmatika "2, 4, 6, 8" ?', tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log('Apakah deret ini merupakan deret aritmatika "2, 6, 18, 54" ?', tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log('Apakah deret ini merupakan deret aritmatika "1, 2, 3, 4, 7, 9" ?', tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false