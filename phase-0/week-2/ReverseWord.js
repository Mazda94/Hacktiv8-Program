// Logic Challenge - Balik Kata
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// Function akan me-return kata yang dibalik. 
// Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

function balikKata(kata) {
    var balikKata = '';
    var initIndex = kata.length - 1;
    for (let i = initIndex; i >= 0; i--) {
        balikKata += kata[i];
    }
    return balikKata;
}

console.log('****************************************')
console.log('Logic Challenge - Balik Kata')
console.log('****************************************')
console.log('Hello World and Coders =', balikKata('Hello World and Coders'));
console.log('John Doe =', balikKata('John Doe'));
console.log('I am a bookworm =', balikKata('I am a bookworm'));
console.log('Coding is my hobby =', balikKata('Coding is my hobby'));
console.log('Super =', balikKata('Super'));