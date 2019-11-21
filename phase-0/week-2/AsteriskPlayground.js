// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). 
// Setiap baris memiliki 1 simbol '*'.

console.log('=====================================');
console.log('1. Menyusun Barisan Bintang');
console.log('=====================================');


var rows1;
for (rows1 = 0; rows1 < 5; rows1++) {
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). 
// Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

console.log('=====================================');
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
console.log('=====================================');


var rows2;
for (rows2 = 0; rows2 < 5; rows2++) {
    for (var j = 0; j < 5; j++) {
        // process.stdout.write() merupakan fungsi untuk menampilkan character/string
        // sedangkan console.log() memanggil fungsi process.stdout.write() yang di tambahkan dengan line break "\n"
        process.stdout.write('*');
    }
    console.log('');
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks(bintang) dalam bentuk tangga.
// Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris.Baris pertama, hanya ada satu bintang.Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya.
// Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

console.log('=====================================');
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log('=====================================');


var rows3;
for (rows3 = 0; rows3 <= 5; rows3++) {
    for (var j = 0; j < rows3; j++) {
        process.stdout.write('*');
    }
    console.log('');
}