/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 *  
 */

// DEKLARASI `numbers`
// DEKLARASI `number`
// DEKLARASI `asterisk`
// SET `asterisk` SAMA DENGAN `numbers` SLICE `numbers` LENGTH-5 SAMPAI DENGAN `numbers` LENGTH
// SET `number` SAMA DENGAN `numbers` INDEX[0] SAMPAI DENGAN `numbers` LENGTH-5

// IF `numbers` LENGTH KURANG DARI 10
// TAMPILKAN "Invalid phone number"

// ELSE
// DEKLARASI `temp`

// LOOP `index` KURANG DARI `number` LENGTH
// SET `temp` SAMA DENGAN `number`[`index`]
// TAMBAHKAN `index` DENGAN 1
// ENDLOOP

// LOOP `index` KURANG DARI `asterisk` LENGTH
// SET `temp` SAMA DENGAN `asterisk`[`index`]
// TAMBAHKAN `index` DENGAN 1
// ENDLOOP
// TAMPILKAN `temp`

// ENDIF



function secretPhoneNumber(numbers) {
    // your code here

    // console.log(numbers.length)
    let number = numbers.slice(0, numbers.length - 5)
        // console.log(number)
    let asterisk = numbers.slice(numbers.length - 5, numbers.length)
        // console.log(asterisk)
    if (numbers.length < 10) {
        return 'Invalid phone number'
    } else {
        let temp = ''
        for (let i = 0; i < number.length; i++) {
            temp += number[i]
        }
        for (let i = 0; i < asterisk.length; i++) {
            temp += '*'
        }
        return temp
    }
}

console.log(secretPhoneNumber("081267465370"))
    // 0812674*****
console.log(secretPhoneNumber("08537582711"))
    // 085375*****
console.log(secretPhoneNumber("085758271523"))
    // 0857582*****
console.log(secretPhoneNumber("0811739915"))
    // 08117*****
console.log(secretPhoneNumber("08238797"))
    // "Invalid phone number"