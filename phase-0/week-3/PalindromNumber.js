function angkaPalindrome(num) {
    var input = String(num)
    var temp = ''

    if (input.length < 2) {
        temp += num + 1
    } else {
        for (let i = num; i < num * 2; i++) {
            var strNumber = ''
            strNumber += i
            if (palindrome(strNumber)) {
                temp = strNumber
                break
            }
        }
    }
    return temp
}

function palindrome(str) {
    var reverseWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord += str[i]
    }
    return reverseWord === str ? true : false
}



// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(08011994));
console.log(angkaPalindrome(123456789));
console.log(angkaPalindrome(1234));