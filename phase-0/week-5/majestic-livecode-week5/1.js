/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00
[RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
  formatUang(2000)
  output: Rp2.000,00
*/

function formatUang(number) {
  //code here
  let strNumber = String(number)
  let temp = []
  
  for (let i = strNumber.length - 1; i >= 0; i--) {
    temp.push(strNumber[i])
  }

  let result = []
  for (let i = 0; i < strNumber.length; i += 3) {
    result.push(temp.slice(i, i + 3))
  }
  // console.log(temp)

  let join = ''
  for (let i = result.length - 1; i >= 0; i--) {
    for (let j = result[i].length - 1; j >= 0; j--) {
      join += result[i][j]
    }
    join += '.'
  }
  return 'Rp.'.concat(join.slice(0, join.length - 1), ',00')
}
console.log(formatUang(9000)); // Rp9.000,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(250000)); // 250.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(5867938)); // Rp5.867.938,00