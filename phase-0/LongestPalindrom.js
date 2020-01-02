
const getLongestPalindrom = (str) => {
    let temp = []
    let strTemp = ''

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            strTemp += str[j]
            temp.push(strTemp)
        }
        strTemp = ''
    }

    let arrayOfPalindrom = []
    for (let i = 0; i < temp.length; i++) {
        if (isPalindrome(temp[i])) {
            if (arrayOfPalindrom.length === 0) {
                arrayOfPalindrom.push([temp[i].length, temp[i]])
            } else {
                let flag = false
                for (let j = 0; j < arrayOfPalindrom.length; j++) {
                    if (arrayOfPalindrom[j][1] === temp[i]) {
                        flag = true
                    }
                }
                if (!flag) {
                    arrayOfPalindrom.push([temp[i].length, temp[i]])
                }
            }
        }
    }
    arrayOfPalindrom.sort((a, b) => b[0] - a[0])
    return arrayOfPalindrom[0][1]
}


const isPalindrome = (str) => {
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp === str ? true : false
}


console.log(getLongestPalindrom('Banana'))
console.log(getLongestPalindrom('ana'))
console.log(getLongestPalindrom('Muhammad Ali Mazhuda'))
console.log(getLongestPalindrom('duyabbcsscbbauyd'))