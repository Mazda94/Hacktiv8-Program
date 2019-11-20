// 1. Melakukan Looping Menggunakan While
// *************************************************
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

console.log('=============================================');
console.log('1. Melakukan Looping Menggunakan While');
console.log('=============================================');
console.log('LOOPING PERTAMA');
var i = 2;
while (i <= 20) {
    console.log(i + ' - I love coding');
    i += 2;
}


console.log('LOOPING KEDUA');
var j = 20;
while (j >= 2) {
    console.log(j + ' - I will become fullstack developer');
    j -= 2;
}
console.log('');


// 2. Melakukan Looping Menggunakan For
// *************************************************
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.


console.log('=============================================');
console.log('2. Melakukan Looping Menggunakan For');
console.log('=============================================');
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}


console.log('LOOPING KEDUA');
for (var j = 20; j >= 1; j--) {
    console.log(j + ' - I will become fullstack developer');
}
console.log('');


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// 1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// 2. Di dalam perulangan, periksa setiap angka counter:
// 3. Apabila angka counter adalah angka genap, tuliskan GENAP
// - Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// - Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// 4. Pada 3 perulangan baru ini periksa setiap angka counter:
// - Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// - Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// - "3 kelipatan 3"dan seterusnya.


console.log('=============================================');
console.log('3. Angka Ganjil dan Genap');
console.log('=============================================');
console.log('');
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}


console.log('=============================================');
console.log('3. Counter kelipatan 3');
console.log('=============================================');
console.log('');
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + " KELIPATAN 3");
    } else {
        console.log('');
    }
}
console.log('');


console.log('=============================================');
console.log('3. Counter kelipatan 6');
console.log('=============================================');
console.log('');
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + " KELIPATAN 6");
    } else {
        console.log('');
    }
}
console.log('');


console.log('=============================================');
console.log('3. Counter kelipatan 10');
console.log('=============================================');
console.log('');
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + " KELIPATAN 10");
    } else {
        console.log('');
    }
}
