// Logic Challenge - Naik Angkot

// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]


function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    let result = []
    for (let i = 0; i < arrPenumpang.length; i++) {
        let obj = {}
        obj['penumpang'] = arrPenumpang[i][0]
        obj['naikDari'] = arrPenumpang[i][1]
        obj['tujuan'] = arrPenumpang[i][2]
        // console.log(obj)
        let jarak = 0
        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === obj['tujuan']) {
                jarak += j
            } else if (rute[j] === obj['naikDari']) {
                jarak -= j
            }
        }
        // console.log(jarak)
        obj['bayar'] = Math.abs(jarak) * 2000
        result.push(obj)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'F', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]