function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    // var penampung faktor pembagi
    let subFactor = []
    for (let i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            subFactor.push(i)
        }
    }
    // console.log(subFactor)

    // variabel penampung factor dan pengalinya
    let temp = []
    let strFactor = ''
    for (let i = 0; i < subFactor.length; i++) {
        strFactor += String(subFactor[i]).concat(angka / subFactor[i])
        temp.push(strFactor)
        strFactor = ''
    }
    temp = temp.slice(0, Math.ceil(temp.length / 2)).sort((a, b) => a - b)
    
    return temp[0].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2