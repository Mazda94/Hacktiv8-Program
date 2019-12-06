/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

// function pair(str) {
//     // Write your code here
//     // console.log(str)
//     let temp = []
//     let indexSubstr = []
//     let arrOfNames = []
//     let result = []

//     if (str.length === 0) {
//         return 'No Pair'
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//             indexSubstr.push(i)
//         } else if (str[i] === ',') {
//             indexSubstr.push(i)
//             indexSubstr.push(i + 1)
//         } else if (i === str.length) {
//             indexSubstr.push(i)
//         }
//     }
//     // console.log(indexSubstr)
//     for (let i = 0; i < indexSubstr.length; i++) {
//         temp.push(str.substring(indexSubstr[i], indexSubstr[i + 1]))
//     }
//     console.log(temp, '<< ini temp')
//     for (let i = 0; i < temp.length; i++) {
//         if (temp[i] !== ',') {
//             arrOfNames.push(temp[i])
//         }
//     }
//     console.log(arrOfNames)
//     for (let i = 0; i < arrOfNames.length; i++) {
//         if (arrOfNames.length % 2 == 0) {
//             if (arrOfNames[i * 2] != undefined) {
//                 result.push(arrOfNames[i * 2] + ' dan ' + arrOfNames[i * 2 + 1])
//             }
//         } else {
//             if (arrOfNames[i * 2 + 1] != undefined) {
//                 result.push(arrOfNames[i * 2] + ' dan ' + arrOfNames[i * 2 + 1])
//             } else if (arrOfNames[i * 2] != undefined) {
//                 result.push(arrOfNames[i * 2] + ' Sendirian')
//             }
//         }
//     }
//     return result
// }


function pair(str) {
    let temp = ''
    let arrOfNames = []
    let flag = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ',') {
            temp += str[i]
        } else {
            flag = true
        }
        if (flag) {
            arrOfNames.push(temp)
            temp = ''
            flag = false
        }
        // console.log(temp)
    }
    arrOfNames.push(temp)
    // console.log(arrOfNames)

    let result = []
    for (let i = 0; i < arrOfNames.length; i += 2) {
        if (str.length === 0) {
            return 'no pair'
        } else {
            if (arrOfNames[i + 1] !== undefined) {
                result.push([arrOfNames[i] + ' dan ' + arrOfNames[i + 1]])
            } else {
                result.push([arrOfNames[i] + ' sendirian'])
            }
        }
    }
    return result
}

console.log(pair('yusuf,tony,adiel'))
// [ 'yusuf dan tony', 'adiel sendirian' ]

console.log(pair('fajrin,sahata,onesinus,jetly'))
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

console.log(pair('refqi,fahmi,sinung,arif,gusti'))
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

console.log(pair(''))
    // No pair