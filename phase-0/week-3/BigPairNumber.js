// Logic Challenge - Pasangan Angka Terbesar

// Problem
// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. 
// Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. 
// Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.


function pasanganTerbesar(num) {
    var pairNumber = []
    var strNum = String(num)

    // Pairing angka
    for (let i = 0; i < strNum.length; i++) {
        if (i < strNum.length - 1) {
            pairNumber.push(strNum[i] + strNum[i + 1])
        }
    }
    // Using descending sort
    var biggestNumber = pairNumber.sort(function(a, b) { return a - b })
    return biggestNumber[pairNumber.length - 1]

    // Using ascending sort
    // var biggestNumber = pairNumber.sort(function(a, b) { return b - a })
    // return biggestNumber[0]
}

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('Menghitung Pasangan Angka Terbesar')
console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
console.log('')

console.log('Pasangan angka terbesar dari 641573 adalah :', pasanganTerbesar(641573)); // 73
console.log('Pasangan angka terbesar dari 12783456 adalah :', pasanganTerbesar(12783456)); // 83
console.log('Pasangan angka terbesar dari 910233 adalah :', pasanganTerbesar(910233)); // 91
console.log('Pasangan angka terbesar dari 71856421 adalah :', pasanganTerbesar(71856421)); // 85
console.log('Pasangan angka terbesar dari 79918293 adalah :', pasanganTerbesar(79918293)); // 99`