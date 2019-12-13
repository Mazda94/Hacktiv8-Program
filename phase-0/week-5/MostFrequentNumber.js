// Logic Challenge - Most Frequent Largest Numbers

// Problem
// Implementasikan function sortingdan getTotaluntuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sortingdan getTotal). 
// Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    // code di sini
    // simply way
    return arrNumber.sort((a, b) => a - b)

    // manual sort
    // for (let i = arrNumber.length - 1; i >= 0; i--) {
    //     // console.log(arrNumber[i])
    //     for (let j = 0; j <= i; j++) {
    //         // console.log(i, j)
    //         // console.log(j - 1, arrNumber[j - 1] > arrNumber[j], j)
    //         if (arrNumber[j - 1] > arrNumber[j]) {
    //             // console.log(arrNumber[j - 1])
    //             var temp = arrNumber[j - 1];
    //             arrNumber[j - 1] = arrNumber[j];
    //             arrNumber[j] = temp;
    //         }
    //     }
    // }

    // // console.log(arrNumber)
    // return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    
    // Menggunakan Array
    // let result = []
    // for (let i = 0; i < arrNumber.length; i++) {
    //     if (result.length === 0) {
    //         result.push([arrNumber[i], 1])
    //     } else {
    //         let flag = false
    //         for (let j = 0; j < result.length; j++) {
    //             // cek apakah nilai dalam arrNumber[i] sama dengan result[j][0]
    //             if (arrNumber[i] === result[j][0]) {
    //                 // jika ya, tambahkan frekuensi value / result[j][1] dengan 1
    //                 // set nilai flag menjadi true
    //                 result[j][1] += 1
    //                 flag = true
    //             }
    //         }
    //         // cek apakah nilai flag true atau false
    //         // console.log(flag)
    //         if (!flag) {
    //             // jika false, push nilai arrNumber[i] dengan frekuesnsi 1
    //             result.push([arrNumber[i], 1])
    //         }
    //     }
    // }
    // result.sort((a, b) => b[0] - a[0])
    // return result[0]


    // Menggunakan Object
    let obj = {}
    for (let i = 0; i < arrNumber.length; i++) {
        if (obj[arrNumber[i]] === undefined) {
            obj[arrNumber[i]] = 1
        } else {
            obj[arrNumber[i]] += 1
        }
    }

    // notes : object yang memiliki key berupa number, maka key nya akan tersortir ascending secara otomatis
    let result = []
    for (key in obj) {
        result.push([key, obj[key]])
    }
    return result[result.length - 1]
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    // console.log(listSort)
    var countHighest = getTotal(listSort);
    // console.log(countHighest)
    return arrNumber.length === 0
        ? '\'\''
        : 'angka paling besar adalah '.concat(countHighest[0], ' dan jumlah kemunculan sebanyak ', countHighest[1], ' kali');
}

// console.log(mostFrequentLargestNumbers([2, 2, 8]));
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''