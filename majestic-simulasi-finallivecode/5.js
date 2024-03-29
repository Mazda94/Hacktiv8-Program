/**
 * ==============
 * TINDER APPS JS
 * ==============
 * 
 * Description
 * -----------
 * Function Tinder Apps, akan mencocokkan pengguna pria dan wanita yang memiliki ekspektasi 
 * yang sesuai. Function ini akan menerima parameter array of object dan mengembalikkan nilai
 * object.
 * 
 * Instruction
 * -----------
 * Untuk setiap orang, buatlah status match dengan syarat:
 * - Memiliki jenis kelamin yang berbeda
 * - Expectation yang dimiliki seseorang sesuai dengan salah satu traits yang dimiliki lawan jenisnya
 * 
 * Tampilkanlah status dengan siapa saja tiap orang memiliki kecocokan / match
 * 
 * Example
 * -------
 * @input = [
 *   { name: 'Andre', gender: 'Male', traits: ['Dewasa', 'Tampan'], expectation: 'Jujur', },
 *   { name: 'Marsya', gender: 'Female', traits: ['Cantik', 'Kaya'], expectation: 'Kaya', },
 *   { name: 'Dimas', gender: 'Male', traits: ['Pintar', 'Kaya'], expectation: 'Cantik', },
 *   { name: 'Bella', gender: 'Female', traits: ['Cantik', 'Pintar'], expectation: 'Pintar', },
 *   { name: 'Derpina', gender: 'Female', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: 'Jujur', }
 * ]
 * Marsya => match dengan dimas karena salah satu traits dimas sesuai dengan expectation marsya, yaitu kaya
 * @output =
 * {
 *   Andre: { match: [] },
 *   Marsya: { match: ['Dimas'] },
 *   Dimas: { match: ['Marsya', 'Bella', 'Derpina'] },
 *   Bella: { match: ['Dimas'] },
 *   Derpina: { match: [] }
 * }
 */

function tinder(people) {
  // Write your code here
  let obj = {}
  for (let i = 0; i < people.length; i++) {
    if (obj[people[i]['name']] === undefined) {
      obj[people[i]['name']] = {
        match: []
      }
    }
  }
  console.log(obj)

  // for (let i = 0; i < people.length; i++) {
  //   // console.log(people[i]['expectation'])
  //   for (let j = 0; j < people[i]['traits'].length; j++) {
  //     // console.log(people[i]['expectation'], people[i]['traits'][j])
  //     if (people[i]['expectation'] === people[i]['traits'][j]) {
  //       console.log(people[i]['name'])
  //     }
  //   }
  // }

  return obj
}

var people1 = [
  {
    name: 'Andre',
    gender: 'Male',
    traits: ['Dewasa', 'Tampan'],
    expectation: 'Jujur',
  },
  {
    name: 'Marsya',
    gender: 'Female',
    traits: ['Cantik', 'Kaya'],
    expectation: 'Kaya',
  },
  {
    name: 'Dimas',
    gender: 'Male',
    traits: ['Pintar', 'Kaya'],
    expectation: 'Cantik',
  },
  {
    name: 'Bella',
    gender: 'Female',
    traits: ['Cantik', 'Pintar'],
    expectation: 'Pintar',
  },
  {
    name: 'Derpina',
    gender: 'Female',
    traits: ['Cantik', 'Sederhana', 'Rajin'],
    expectation: 'Jujur',
  }
]
console.log(tinder(people1))
// {
//   Andre: { match: [] },
//   Marsya: { match: ['Dimas'] },
//   Dimas: { match: ['Marsya', 'Bella', 'Derpina'] },
//   Bella: { match: ['Dimas'] },
//   Derpina: { match: [] }
// }

var people2 = [
  {
    name: 'Aladdin',
    gender: 'Male',
    traits: ['Kaya', 'Baik'],
    expectation: 'Soleha',
  },
  {
    name: 'Jasmine',
    gender: 'Female',
    traits: ['Cantik', 'Kaya', 'Soleha'],
    expectation: 'Olahragawan',
  },
  {
    name: 'Hercules',
    gender: 'Male',
    traits: ['Pintar', 'Kaya', 'Olahragawan'],
    expectation: 'Cantik',
  },
  {
    name: 'Megara',
    gender: 'Female',
    traits: ['Cantik', 'Pintar'],
    expectation: 'Olahragawan',
  },
  {
    name: 'Mulan',
    gender: 'Female',
    traits: ['Cantik', 'Sederhana', 'Rajin'],
    expectation: 'Melankolis',
  },
  {
    name: 'Shang',
    gender: 'Male',
    traits: ['Tampan', 'Baik'],
    expectation: 'Jujur',
  },
]
// console.log(tinder(people2))
// {
//   Aladdin: { match: ['Jasmine'] },
//   Jasmine: { match: ['Hercules'] },
//   Hercules: { match: ['Jasmine', 'Megara', 'Mulan'] },
//   Megara: { match: ['Hercules'] },
//   Mulan: { match: [] },
//   Shang: { match: [] }
// }