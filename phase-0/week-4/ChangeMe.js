// Logic Challenge - Change Me!

// Problem
// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi 
// dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . 
// Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. 
// Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar 
// dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:
// * Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// * John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

function changeMe(arr) {
    // you can only write your code here!

    let temp = []
    if (arr.length == 0) {
        console.log("\"\"")
    } else {
        for (let i = 0; i < arr.length; i++) {
            let label = ''
            let obj = {}
            for (let j = 0; j < 4; j++) {
                label = (i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':'
                switch (j) {
                    case 0:
                        obj['firstname'] = arr[i][j]
                        break

                    case 1:
                        obj['lastname'] = arr[i][j]
                        break

                    case 2:
                        obj['gender'] = arr[i][j]
                        break
                    case 3:
                        if (arr[i][j]) {
                            obj['age'] =
                                arr[i][j] < new Date().getFullYear()
                                    ? new Date().getFullYear() - arr[i][j]
                                    : 'Invalid Birth Year'
                        } else {
                            obj['age'] = 'Invalid Birth Year'
                        }
                        break
                }
            }
            temp.push([label, obj])
        }
    }
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            console.log(temp[i][j])
        }
        console.log('')
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 2000], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""