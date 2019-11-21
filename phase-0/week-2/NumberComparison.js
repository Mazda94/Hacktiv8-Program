// Logic Challenge - Bandingkan Angka
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
    if (angka1 < angka2) {
        return true
    } else if (angka1 > angka2) {
        return false
    } else {
        return -1
    }
}
console.log('****************************************')
console.log('Logic Challenge - Bandingkan Angka')
console.log('****************************************')
console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));