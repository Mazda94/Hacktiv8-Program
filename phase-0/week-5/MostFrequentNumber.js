// Logic Challenge - Most Frequent Largest Numbers

// Problem
// Implementasikan function sortingdan getTotaluntuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sortingdan getTotal). 
// Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    // code di sini
    // simply way
    // return arrNumber.sort((a, b) => a - b)

    // manual
    let flag = false
    if (!flag) {
        flag = true
        for (let i = 1; i < arrNumber.length; i += 1) {
            console.log(arrNumber[i - 1], arrNumber[i])
            console.log(arrNumber[i - 1] > arrNumber[i])
            if (arrNumber[i - 1] > arrNumber[i]) {
                flag = false
                let temp = arrNumber[i - 1]
                arrNumber[i - 1] = arrNumber[i]
                arrNumber[i] = temp
            }
        }

    }

    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    console.log(listSort)
        // var countHighest = getTotal(listSort);
        // return countHighest;
    return 'mostFrequentLargestNumbers'
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
//''~