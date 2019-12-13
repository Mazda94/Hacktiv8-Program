// Logic Challenge - Password Generator

// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// 1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
// (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// 2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// 3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// 4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga


function changeVocals(str) {
    //code di sini
    let letter = 'abcdefghijklmnopqrstuvwxyz'
    let vocal = 'aeiuo'
    let vocalChanged = ''

    let strArray = []
    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i])
    }
    // console.log(strArray)

    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
            // console.log(strArray[i].toLowerCase() , vocal[j], strArray[i] === vocal[j])
            if (strArray[i] === vocal[j]) {
                // console.log(strArray[i].toLowerCase() , vocal[j])
                for (let k = 0; k < letter.length; k++) {
                    if (strArray[i].toLowerCase() === letter[k]) {
                        // console.log(strArray[i].toLowerCase(), letter[k + 1])
                        strArray[i] = letter[k + 1]
                        // console.log(strArray[i])
                        break
                    }
                }
            }
        }
        vocalChanged += strArray[i]
    }
    return vocalChanged
}

function reverseWord(str) {
    //code di sini
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

function setLowerUpperCase(str) {
    //code di sini
    let result = ''
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i] === str[i].toLowerCase(), str[i], str[i].toLowerCase())
        if (str[i] === str[i].toLowerCase()) {
            result += str[i].toUpperCase()
        } else {
            result += str[i].toLowerCase()
        }
    }
    // console.log(result)
    return result
}

function removeSpaces(str) {
    //code di sini
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            result += str[i]
        }
    }
    return result
}

function passwordGenerator(name) {
    //code di sini
    let changeVocal = changeVocals(name)
    // console.log(changeVocal)
    let reversedWord = reverseWord(changeVocal)
    // console.log(reversedWord)
    let changeSize = setLowerUpperCase(reversedWord)
    // console.log(changeSize)
    let removedSpaces = removeSpaces(changeSize)
    // console.log(removedSpaces)
    return name.length < 5 ? 'Minimal karakter yang diinputkan adalah 5 karakter' : removedSpaces
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'