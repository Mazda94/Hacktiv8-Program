// Logic Challenge - Tentukan Deret Geometri


// Problem
// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebut akan mengembalikan truejika array dari parameter tersebut merupakan deret geometri. 
// Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian.
//  Contoh, [1, 3, 9, 27, 81] adalah deret geometri dengan pertambahan nilai sebesar pengalian 3, 
//  dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).


function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var ratio = arr[arr.length - 1] / arr[arr.length - 2]
        // if (ratio % 1 != 0) {
        //     return false
        // } else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] != undefined) {
            if (ratio != arr[i + 1] / arr[i]) {
                return false
            } else {
                return true
            }
        }
    }
    // }
}

// TEST CASES
console.log('Apakah deret ini merupakan deret geometri "1, 3, 9, 27, 81" ?', tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log('Apakah deret ini merupakan deret geometri "2, 4, 8, 16, 32" ?', tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log('Apakah deret ini merupakan deret geometri "2, 4, 6, 8" ?', tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log('Apakah deret ini merupakan deret geometri "2, 6, 18, 54" ?', tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log('Apakah deret ini merupakan deret geometri "1, 2, 3, 4, 7, 9" ?', tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false`