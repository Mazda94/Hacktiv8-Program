// Logic Challenge - Konversi Menit
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. 
// Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    var minutes = '';
    var second = '';
    minutes += menit / 60
    second += menit % 60;
    var newSecond = '';
    var newMinutes = '';
    if (second.length == 1) {
        newSecond = 0 + second;
    } else {
        newSecond = second;
    }

    // Sebenarnya ada function Math.floor() untuk membulatkan angka ke bawah, namun karena saya di berikan kesempatan
    // untuk belajar di Hacktiv8, maka akan saya manfaatkan sebaik2nya untuk membedah bagaimana fungsi2 bawaan di Javascript bekerja
    for (let i = 0; i < minutes.length; i++) {
        if (minutes[i] !== '.') {
            newMinutes += minutes[i];
        } else {
            break;
        }
    }

    // Using Math.floor()
    // minutes = Math.floor(minutes);
    // return minutes + ':' + newSecond;

    // Using for loop
    return newMinutes + ':' + newSecond;
}

console.log('****************************************')
console.log('Logic Challenge - Konversi Menit')
console.log('****************************************')
console.log(konversiMenit(72));
console.log(konversiMenit(612));
console.log(konversiMenit(6012));
console.log(konversiMenit(60012));
console.log(konversiMenit(600012));