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
    for (let i = 0; i < minutes.length; i++) {
        if (minutes[i] !== '.') {
            newMinutes += minutes[i];
        } else {
            break;
        }
    }
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