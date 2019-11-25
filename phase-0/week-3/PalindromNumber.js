function angkaPalindrome(num) {
    var input = String(num)
    var temp = ''

    if (input.length < 2 && input != 9) {
        temp += num + 1
    } else {
        for (let i = num; i < 10000; i++) {
            var strNumber = ''
            strNumber += i
            if (strNumber.length == 1) {
                strNumber += i
            } else if (palindrome(strNumber)) {
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