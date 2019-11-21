// Logic Challenge - X dan O
// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o' || str[i] === 'O') {
            o += 1;
        } else if (str[i] === 'x' || str[i] === 'X') {
            x += 1;
        } else {
            console.log('Character ', str[i], 'bukan "O" atau "X"')
        }
    }
    if (x === o) {
        return true
    } else {
        return false
    }
}

console.log('****************************************')
console.log('Logic Challenge - X dan O')
console.log('****************************************')
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));