function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    // var penampung faktor pembagi
    let subFactor = []
    for (let i = 0; i < angka; i++) {
        if (angka % i === 0) {
            subFactor.push(i)
        }
    }
    console.log(subFactor)

    // variabel penampung factor dan pengalinya
    let temp = []
    for (let i = 0; i < subFactor.length; i++) {
        temp.push([subFactor[i], (angka / subFactor[i])])
    }
    console.log('Sebelum di slice >> ', temp)
    temp = temp.slice(0, Math.ceil(temp.length / 2))
    console.log('Sesudah di slice >> ', temp)

    let result = []
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < 1; j++) {
            // console.log(temp[i][j] + temp[i][j + 1])
            result.push(temp[i][j] + temp[i][j + 1])
        }
    }
    // console.log(result)
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2