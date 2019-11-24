// Melakukan Looping Data Array
// Sering kali data yang diterima dari database adalah array yang multidimensi (array di dalam array). 
// Sebagai developer, tugas kita adalah mengolah data tersebut agar dapat menampilkan informasi yang diinginkan.

// Objectives
// Mengenal Array Multidimensi
// Mengerti Cara Mengakses Nilai Array Multidimensi
// Directions
// Buatlah sebuah fungsi dengan nama dataHandlingdengan sebuah parameter untuk menerima argumen. 
// Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.

function dataHandling(arr) {
    var resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        var newArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            switch (j) {
                case 0:
                    newArr.push('Nomor Id : ' + arr[i][j])
                    break;
                case 1:
                    newArr.push('Nama lengkap : ' + arr[i][j])
                    break
                case 2:
                    newArr.push('TTL : ' + arr[i][j] + ' ' + arr[i][j + 1])
                    break
                case 4:
                    newArr.push('Hobi : ' + arr[i][j])
                    break
            }
        }
        resultArray.push(newArr)
    }
    return resultArray
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

var newArray = dataHandling(input)
for (let i = 0; i < newArray.length; i++) {
    console.log('*********** Data ke-' + i + ' ***********')
    for (let j = 0; j < newArray[i].length; j++) {
        console.log(newArray[i][j])
    }
    console.log('*******************************')
    console.log('')
}