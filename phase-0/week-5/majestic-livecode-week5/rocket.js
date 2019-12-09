/**
 * ====================
 * Balance those words!
 * ====================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengecek apakah jumlah kata yang diterima function muncul
 * dengan jumlah frekuensi yang sama.
 * 
 * Function menerima 1 parameter @str yang merupakan sebuah kalimat dan me-return:
 * true -> jika seluruh kata yang muncul memiliki frekuensi yang sama
 * false -> jika jumlah kata yang muncul berbeda
 * 
 * Example
 * -------
 * 1. var @str = 'kita hanya teman'
 * karena kata kita, hanya, dan teman semuanya muncul sekali, maka @output = true
 * 
 * 2. var @str = 'buat apa susah susah itu tak ada gunanya'
 * kata susah muncul 2x dan sisanya muncul sekali, maka @output = false
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function:
 *    split, slice, splice, substring, substr, reduce, filter, map, includes, indexOf, lastIndexOf, some, every
 */

function word(str) {
    // your code here
    let temp = []
    let strTemp = ''

    let flag = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            flag = true
        } else {
            strTemp += str[i]
        }
        if (flag) {
            temp.push(strTemp)
            flag = false
            strTemp = ''
        }
    }
    temp.push(strTemp)
    // console.log(temp)

    if (temp.length === 1) {
        return true
    }

    let frequent = {}

    for (let i = 0; i < temp.length; i++) {
        // console.log(temp[i])
        if (frequent[temp[i]] === undefined) {
            frequent[temp[i]] = 1
        } else {
            frequent[temp[i]] += 1
        }
    }

    let result = []
    for (key in frequent) {
        result.push(frequent[key])
    }

    let sum = 0
    for (let i = 0; i < result.length; i++) {
        sum += result[i]
    }

    // console.log(sum / result.length, result[0])
    // console.log(sum / result.length === result[0])
    return sum / result.length === result[0] ? true : false 
}

console.log(word('saya'))
// true
console.log(word('saya kamu'))
// true
console.log(word('saya makan saya'))
// false
console.log(word('aku tahu kamu tahu aku tapi kamu tahu kamu tapi aku tahu tapi aku kamu tapi'))
// true
console.log(word('kuku kaki kuku kaki kaka kaka kaku kaku'))
// true
console.log(word('botak tabok batak botak tabok batak botak tabok batak botak tabok batak botak batok batak botak tabok batak botak tabok batak botak tabok batuk botak tabok batak botak tabok batak botak tabok batak'))
// false
console.log(word('cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh kencur cangkir kencur cengkeh cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh cangkir kencur cengkeh kencur cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cengkeh'))
//true