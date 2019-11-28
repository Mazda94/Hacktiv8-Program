// Logic Challenge - Mencari Mean

// Problem
// Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. 
// Function akan me-return mean dari array atau deret angka tersebut. 
// Mean adalah angka rata-rata dari deret bilangan tersebut. 
// Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. 
// Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan (pembulatan ke atas).


function cariMean(arr) {
    // Menghitung jumlah nilai dalam array
    var arrSum = 0
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i]
    }

    // Menghitung rata-rata/mean
    var result = arrSum / arr.length

    // Jika sisa bagi result dengan 1 adalah 0, maka bilangan tersebut adalah bilangan bulat,
    // Jika tidak, bilangan desimal
    if (result % 1 == 0) {
        return result
    } else {
        var strResult = String(result)
        var temp = ''
        for (let i = 0; i < strResult.length; i++) {
            if (strResult[i] !== '.') {
                temp += strResult[i];
            } else {
                break;
            }
        }

        // Proses pembulatan bilangan desimal
        // cara lain dapat menggunakan fungsi Math.round(value)
        if (result % 1 > 0.5) {
            return result = Number(temp) + 1
        } else {
            return result = Number(temp)
        }
    }
}

// TEST CASES
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('Menghitung nilai rata-rata / mean dari suatu kumpulan nilai dengan pembulata ke atas')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('')

console.log('Rata-rata dari nilai berikut "1, 2, 3, 4, 5" adalah ', cariMean([1, 2, 3, 4, 5])); // 3
console.log('Rata-rata dari nilai berikut "3, 5, 7, 5, 3" adalah ', cariMean([3, 5, 7, 5, 3])); // 5
console.log('Rata-rata dari nilai berikut "6, 5, 4, 7, 3" adalah ', cariMean([6, 5, 4, 7, 3])); // 5
console.log('Rata-rata dari nilai berikut "1, 3, 3" adalah ', cariMean([1, 3, 3])); // 2
console.log('Rata-rata dari nilai berikut "7, 7, 7, 7, 7" adalah ', cariMean([7, 7, 7, 7, 7])); // 7