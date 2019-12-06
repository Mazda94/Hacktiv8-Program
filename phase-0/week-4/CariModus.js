// Logic Challenge - Mencari Modus
// Problem
// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
// Function akan me-return modus dari array atau deret angka tersebut. 
// Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
// Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
// Jika modus tidak ditemukan, function akan me-return -1. 
// Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
// Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.


function cariModus(arr) {
    // you can only write your code here!
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        // Validasi apakah temp kosong atau tidak
        if (temp.length === 0) {
            // jika kosong push data
            temp.push([arr[i], 1])
        } else {
            // jika tidak
            // Buat variable flag untuk mengecek nilai dalam temp
            let flag = false
                // loop temp
            for (let j = 0; j < temp.length; j++) {
                // cek apakah nilai dalam arr[i] sama dengan temp[j][0]
                if (arr[i] === temp[j][0]) {
                    // jika ya, tambahkan frekuensi value / temp[j][1] dengan 1
                    // set nilai flag menjadi true
                    temp[j][1] += 1
                    flag = true
                }
            }
            // cek apakah nilai flag true atau false
            if (!flag) {
                // jika false, push nilai arr[i] dengan frekuesnsi 1
                temp.push([arr[i], 1])
            }
        }
    }

    // variable modus untuk menampung frekuensi dari setiap nilai didalam temp
    let modus = []

    // looping untuk menambahkan setiap frekuensi dari temp
    for (let i = 0; i < temp.length; i++) {
        modus.push(temp[i][1])
    }
    // sort nilai tertinggi ke terendah
    modus.sort(function(a, b) { return b - a })

    // cek panjang temp
    // jika panjang temp == 1 maka nilai yang ada dalam temp adalah sama
    // jika panjang temp == panjang arr, maka nilai dalam temp tidak memiliki modus
    if (temp.length === 1 || temp.length === arr.length) {
        // jika ya, return -1
        return -1
    } else {
        // jika tidak, looping temp untuk mengecek frekuensi dalam temp dengan nilai terbesar pada modus
        for (let i = 0; i < temp.length; i++) {
            // cek apakah frekuensi terbesar sama dengan frekuensi yang ada pada temp
            if (modus[0] === temp[i][1]) {
                // jika ya, return value temp
                return temp[i][0]
            }
        }
    }
    // console.log(temp)
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4, 4, 10])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1