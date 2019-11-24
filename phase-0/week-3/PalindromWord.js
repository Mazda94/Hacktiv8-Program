// Logic Challenge - Palindrome

// Problem
// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

function palindrome(kata) {
    var reverseWord = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        reverseWord += kata[i]
    }
    return reverseWord === kata ? true : false
}

console.log('****** Palindrome Word Challenge ******')
console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));