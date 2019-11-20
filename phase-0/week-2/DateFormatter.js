// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
// Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

var tanggal;
var bulan;
var tahun;

tanggal = -1; // tanggal yang tersedia 1 s/d 31
bulan = 11; // bulan yang tersedia 1 s/d 12
tahun = 2019; // tahun yang tersedia 1900 s/d 2200

// cek variable tanggal
if (tanggal > 0) {
    if (tanggal <= 31) {
        // cek variable bulan
        switch (bulan) {
            case 1:
                bulan = "Januari";
                break;
            case 2:
                bulan = "Februari";
                break;
            case 3:
                bulan = "Maret";
                break;
            case 4:
                bulan = "April";
                break;
            case 5:
                bulan = "Mei";
                break;
            case 6:
                bulan = "Juni";
                break;
            case 7:
                bulan = "Juli";
                break;
            case 8:
                bulan = "Agustus";
                break;
            case 9:
                bulan = "September";
                break;
            case 10:
                bulan = "Oktober";
                break;
            case 11:
                bulan = "November";
                break;
            case 12:
                bulan = "Desember";
                break;
            default:
                console.log('Bulan tidak tersedia');
                return; // return untuk menghentikan program
        }

        // cek variable tahun
        if (tahun >= 1900) {
            if (tahun <= 2200) {
                tahun = tahun;
                console.log(tanggal, bulan, tahun);
                // console.log(String(tanggal), bulan, String(tahun)); // Menampilkan tanggal dengan tipe data String
            } else {
                console.log("Tahun tidak tersedia");
            }
        }
    } else {
        console.log("Tanggal tidak tersedia");
    }
} else {
    console.log("Tanggal tidak tersedia");
}