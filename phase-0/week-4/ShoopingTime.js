// Logic Challenge - Shopping Time!

// Problem
// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. 
// Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }


function shoppingTime(memberId, money) {
    // you can only write your code here!
    let initialMoney = money
    let saleProduct = {
        Baju: [
            {
                brand: 'Zoro',
                harga: 500000
            },
            {
                brand: 'H&N',
                harga: 250000
            }
        ],
        Sepatu: [
            {
                brand: 'Stacattu',
                harga: 1500000
            }
        ],
        Sweater: [
            {
                brand: 'Uniklooh',
                harga: 175000
            }
        ],
        'Case Handphone': [
            {
                harga: 50000
            }
        ]
    }

    let harga = []
    for (key in saleProduct) {
        // console.log(saleProduct[key][0]['harga'])
        for (let i = 0; i < saleProduct[key].length; i++) {
            harga.push([saleProduct[key][i]['brand'], saleProduct[key][i]['harga']])
        }
    }
    harga = harga.sort((a, b) => b[1] - a[1])
    // console.log(harga)

    if (memberId === '' || memberId === undefined || money === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < harga[harga.length - 1][1]) {
        return 'Mohon maaf, uang tidak cukup'
    } else {
        let temp = []
        for (let i = 0; i < harga.length; i++) {
            if (money >= harga[i][1]) {
                temp.push(harga[i])
                money -= harga[i][1]
            }
            // console.log(money)
        }
        // console.log(temp)
        let listPurchased = []

        for (let i = 0; i < temp.length; i++) {
            for (key in saleProduct) {
                for (let j = 0; j < saleProduct[key].length; j++) {
                    // console.log(saleProduct[key][j]['brand'], temp[i][0], saleProduct[key][j]['harga'], temp[i][1])
                    if (saleProduct[key][j]['brand'] === temp[i][0] && saleProduct[key][j]['harga'] === temp[i][1]) {
                        // console.log(saleProduct[key][j]['brand'], saleProduct[key][j]['harga'])
                        listPurchased.push(saleProduct[key][j]['brand'] !== undefined ? key.concat(' ', saleProduct[key][j]['brand']) : key)
                    }
                }
            }
        }

        // console.log(listPurchased)
        let result = {}
        result.memberId = memberId
        result.money = initialMoney
        result.listPurchased = listPurchased
        result.changeMoney = money
        return result
    }

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja