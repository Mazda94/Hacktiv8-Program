// Menggunakan Built-in Function pada Array
// Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. 
// Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. 
// Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.

// Objectives
// Mengerti Kegunaan dari Built-in Function yang dimiliki Array
// Mampu Menggunakan Built-in Function yang dimiliki Array

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/08/1989", "Membaca"]

var result = dataHandling2(input)
console.log('****** Mengedit dan menghapus nilai dalam array *******')
console.log(result)
console.log('')

var splitDate = dateSplitter(result, "/")
var bulan = convertToMonthName(splitDate)

console.log('****** Menampilkan nama bulan berdasarkan angka bulan *******')
console.log(bulan)
console.log('')

console.log('****** Mengurutkan tanggal berdasarkan nilai yang terbesar *******')
console.log(splitDate.sort(function(a, b) { return b - a }))
console.log('')

var newDateSeparator = changeDateSeparator(splitDate, '-')
console.log('****** Mengubah separator tanggal *******')
console.log(newDateSeparator)
console.log('')

var name = result[1]
var newName = setNameLength(name, 15);
console.log('****** Menentukan panjang maksimal karakter pada nama *******')
console.log(newName)
console.log('')

// Fungsi untuk mengedit data array
function dataHandling2(input) {
    input.splice(input.length - 1, 1, "Pria", "SMA Internasional Metro")
    for (let i = 0; i < input.length; i++) {
        if (i == 1) {
            var splitName = input[i].split(' ')
            splitName.push('Elsharawy')
            input[i] = splitName.join(' ')
        } else if (i == 2) {
            var splitCity = input[i].split(' ')
            splitCity.unshift('Provinsi')
            input[i] = splitCity.join(' ')
        }
    }
    return input
}

// fungsi untuk membuat array baru menggunakan split
function dateSplitter(result, separator) {
    for (let i = 0; i < result.length; i++) {
        if (i == 3) {
            return result[i].split(separator)
        }
    }
}

// fungsi untuk merubah angka bulan menjadi nama bulan
function convertToMonthName(date) {
    var temp = ''
    for (let j = 0; j < date.length; j++) {
        switch (date[j]) {
            case '01':
                temp = 'Januari'
                break
            case '02':
                temp = 'Februari'
                break
            case '03':
                temp = 'Maret'
                break
            case '04':
                temp = 'April'
                break
            case '05':
                temp = 'Mei'
                break;
            case '06':
                temp = 'Juni'
                break
            case '07':
                temp = 'Juli'
                break
            case '08':
                temp = 'Agustus'
                break
            case '09':
                temp = 'September'
                break
            case '10':
                temp = 'Oktober'
                break
            case '11':
                temp = 'November'
                break
            case '12':
                temp = 'Desember'
                break
        }
    }
    return temp
}

// fungsi untuk mengubah pemisah tanggal
function changeDateSeparator(date, separator) {
    var temp = []
    for (let i = date.length - 1; i >= 0; i--) {
        temp.push(date[i])
    }
    return temp.join(separator)
}

// fungsi untuk menentukan panjang maksimal karakter pada nama
function setNameLength(name, length) {
    return name.slice(0, length)
}