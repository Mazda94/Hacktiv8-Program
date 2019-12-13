/**
 * ========
 * DIVIDERS
 * ========
 * 
 * Diberikan sebuah function dividers yang menerima parameter bertipe number.
 * Function ini akan mengembalikan array multidimensi dimana array tersebut berisi 
 * angka pembagi absolute dari parameter yang diberikan.
 * 
 * Kolom dari array multidimensi maksimal 3
 * 
 * Contoh 1:
 * ----------
 * input: 10
 * output: 
 * [
 *   [ 1, 2, '*' ],
 *   [ '*', 5, '*' ],
 *   [ '*', '*', '*' ],
 *   [ 10 ]
 * ]
 * 
 * penjelasan:
 * dari angka 1 - 10 yang bisa dibagi dengan 10 adalah 1, 2, 5 dan 10.
 * Maka angka selain itu akan diisi menjadi bintang
 * 
 * contoh 2:
 * ----------
 * input: 5
 * output:
 * [
 *   [ 1, '*', '*' ],
 *   [ '*', 5 ]
 * ]
 * 
 * penjelasan:
 * dari angka 1 - 5 yang bisa dibagi dengan 5 adalah 1 dan 5
 * Maka angka selain itu akan diisi menjadi bintang
 */

function dividers(number) {
  //your code here
  if (number < 1) {
    return []
  }

  let temp = []
  for (let i = 1; i <= number; i += 3) {
    temp.push([i, i + 1, i + 2])
  }
  // console.log(temp)
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      if (number % temp[i][j] != 0) {
        temp[i][j] = '*'
      }
    }
  }

  return temp

}

// console.log(dividers(0)) // []

console.log(dividers(10))
//[ [ 1, 2, '*' ], [ '*', 5, '*' ], [ '*', '*', '*' ], [ 10 ] ]

console.log(dividers(5))
//[ [ 1, '*', '*' ], [ '*', 5 ] ]

// console.log(dividers(28))
// [ [   1,   2, '*' ],
//   [   4, '*', '*' ],
//   [   7, '*', '*' ],
//   [ '*', '*', '*' ],
//   [ '*',  14, '*' ],
//   [ '*', '*', '*' ],
//   [ '*', '*', '*' ],
//   [ '*', '*', '*' ],
//   [ '*', '*', '*' ],
//   [ 28 ] ]