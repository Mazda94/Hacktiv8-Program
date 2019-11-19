// Proxytia.js
// *****************************
// Proxytia.js adalah file javascript sederhana yang berisi tentang challenge "IF-ELSE" pada program Hacktiv8 phase-0
// Challenge ini ditujukan bagi student Hacktiv8 untuk mengetahui seberapa jauh pemahaman javascript tentang "IF-ELSE" conditional
// *****************************

// Direction
// ********************************
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. 
// Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek 
// isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

var nama;
var peran;

// Assign nama dengan "Nama kamu"
nama = "Ali";
// Peran tersedia "Ksatria", "Tabib", "Penyihir"
peran = "Tabib";

// Cek isi variable
if (peran === "") {
    console.log("Pilih peranmu untuk memulai game");
} else {
    if (peran === "Ksatria") {
        console.log("Selamat datang " + peran + " " + nama + ", tunjukkan semangat berjuangmu!");
    } else if (peran === "Tabib") {
        console.log("Selamat datang " + peran + " " + nama + ", dengan keahlianmu, sembuhkan ksatriamu!");
    } else if (peran === "Penyihir") {
        console.log("Selamat datang " + peran + " " + nama + ", tunjukkan sihir terbaikmu!");
    } else {
        console.log('Oppss. . . Peran yang kamu pilih tidak tersedia. Peran yang tersedia : "Ksatria", "Tabib" dan "Penyihir"');
    }
}