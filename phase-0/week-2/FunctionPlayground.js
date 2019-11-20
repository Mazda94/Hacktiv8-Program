// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

function shoutOut() {
    return 'Halo Function!';
}


console.log('***************************************');
console.log('Function shoutOut');
console.log('***************************************');
console.log(shoutOut());
console.log('');


// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);

console.log('***************************************');
console.log('Function calculateMultiply');
console.log('***************************************');
console.log(num1 + ' x ' + num2 + ' = ' + hasilPerkalian)
console.log('');

// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu 
// kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function processSentence(name, age, address, hobby) {
    var newSentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
    return newSentence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log('***************************************');
console.log('Function processSentence');
console.log('***************************************');
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
console.log('');