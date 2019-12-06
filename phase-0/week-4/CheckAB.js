// Logic Challenge - Check AB

// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai truejika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

function checkAB(num) {
    // you can only write your code here!
    let temp = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 'a' || num[i] == 'b') {
            temp.push(i + num[i])
        }
    }
    // console.log(temp)
    let tempA = []
    let tempB = []
    if (temp.length < 2) {
        return false
    } else {
        for (let i = 0; i < temp.length; i++) {
            if (temp[i][1] == 'a') {
                tempA.push(temp[i])
            } else if (temp[i][1] == 'b') {
                tempB.push(temp[i])
            }
        }
        // console.log(tempA)
        // console.log(tempB)
    }

    let flag = false
    for (let i = 0; i < tempA.length; i++) {
        for (let j = 0; j < tempB.length; j++) {
            if (Math.abs(tempA[i][0] - tempB[j][0]) == 4) {
                flag = true
            }
        }
    }
    return flag
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false