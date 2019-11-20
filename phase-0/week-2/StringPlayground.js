// 1. Let's Form a Sentence
// *************************************************
// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. 
// Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. 
// Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log('1. Let\'s Form a Sentence');
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
console.log('')

// 2. Index Accessing - 1 by 1
// *************************************************
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. 
// Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. 
// Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]; // do your own!
var thirdWord = word[15] + word[16]; // do your own!
var fourthWord = word[18] + word[19]; // do your own!
var fifthWord = word[21] + word[22] + word[23] + word[24]; // do your own!


console.log('2. Index Accessing - 1 by 1');
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('')


// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 20);
var fifthWord = word.substring(21, 25);


console.log('3. Breaking Sentence (Again) using Substring');
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('')


// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 20);
var fifthWord = word.substring(21, 25);


console.log('4. Breaking Sentence (yet Again) and Count Each Length');
console.log('First Word: ' + exampleFirstWord + ', with length : ' + exampleFirstWord.length);
console.log('Second Word: ' + secondWord + ', with length : ' + secondWord.length);
console.log('Third Word: ' + thirdWord + ', with length : ' + thirdWord.length);
console.log('Fourth Word: ' + fourthWord + ', with length : ' + fourthWord.length);
console.log('Fifth Word: ' + fifthWord + ', with length : ' + fifthWord.length);
console.log('')
