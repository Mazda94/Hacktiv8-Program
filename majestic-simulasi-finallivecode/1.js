/**
 * ==========================
 * What is my email provider?
 * ==========================
 *
 * Description
 * -----------
 * Email merupakan sebuah cara untuk kita berinteraksi antar satu dengan yang lainnya secara elektronik,
 * Banyak sekali provider yang menyediakan layanan email ini.
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan mengeluarkan output provider email yang digunakan oleh user.
 *
 * Contoh
 * =======
 * @input => icha@hacktiv8.com
 * @output => Your email provider is hacktiv8 ( tidak menggunakan .com di belakang)
 *
 * Rules
 * =====
 * 1. Wajib menggunakan PESUDOCODE / ALGORITMA atau -50
 * 2. Tidak diperbolehkan menggunakan built-in function:
 *    .map .filter .reduce .split .join .indexOf .findIndex
 *
 */

// PSEUDO CODE



function emailProvider(email) {
  // Insert your code here
  let startIndex = 0
  let endIndex = 0
  for (let i = 0; i < email.length; i++) {
    if (email[i] == '@') {
      startIndex = i
    } else if (email[i] == '.') {
      endIndex = i
      break
    }
  }
  // console.log(startIndex, endIndex)
  // console.log(email.slice(startIndex + 1, endIndex))
  return 'Your email provider is '.concat(email.slice(startIndex + 1, endIndex))
}

console.log(emailProvider('yusuf@gmail.com')) // Your email provider is gmail
console.log(emailProvider('icha@hacktiv8.com')) // Your email provider is hacktiv8
console.log(emailProvider('icha@yahoo.co.id')) // Your email provider is yahoo