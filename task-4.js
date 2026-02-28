//split() >>
//split() : berfung Memecah string menjadi array berdasarkan pemisah (separator) yang kita tentukan.
//separator : adalah karakter pemisah, contoh spasi " ", koma "," dan lainnya.
const str = "ini adalah sebuah kalimat untuk melakukan split.";

const words = str.split(" "); 
//pecah string berdasarkan spasi, maka setiap kata akan menjadi elemen array
console.log(words[3]); 
// mengambil kata dari indeks ke 3 pada kalimat yang sudah menjadi elemen array
// hasil output: "kalimat"

const chars = str.split("");
//pecah string menjadi per karakter karena separator stringnya kosong
console.log(chars[8]); 
// mengambil huruf dari indeks ke 8 pada string yang sudah di pecah per karakter
// hasil output: "k"

const strCopy = str.split();
//jika split() tanpa parameter, maka string tidak dipecah dan seluruh string menjadi 1 elemen array
console.log(strCopy);
// hasil output: Array ["ini adalah sebuah kalimat untuk melakukan split."]


//replace >>
//replace() : berfungsi mengganti bagian tertentu dari string menjadi nilai baru
const paragraph = "saya  tertidur di kursi setelah masuk ke kamar"; //masukkan input sebuah kalimat
//Cari kata "kursi" dalam string, lalu ganti dengan "kasur".
console.log(paragraph.replace("kursi", "kasur")); //mengubah kata "kursi" menjadi "kasur" pada kalimat
// hasil output: "saya  tertidur di kasur setelah masuk ke kamar"


//join() >>
//join() : berfungsi menggabung semua elemen array menjadi satu string
const elements = ["mangga", "Apel", "Alpukat","Sirsak","Durian"];

console.log(elements.join());
//gabungkan semua elemen, karena separator nya kosong maka defaultnya adalah koma ","
// hasil output: "mangga,Apel,Alpukat,Sirsak,Durian"

console.log(elements.join(" "));
//gabungkan semua elemen, karena separator nya spasi " " maka akan ada pemisah spasi setiap array
// hasil output: "mangga Apel Alpukat Sirsak Durian"

console.log(elements.join("-"));
//gabungkan semua elemen dengan tanda pemisah "-"
// hasil output: "mangga-Apel-Alpukat-Sirsak-Durian"


//toSorted() >>
//toSorted() : berfungsi untuk mengurutkan nilai awal dari A sampai Z atau angka 1 sampai ke angka tertinggi
const namaUrut = ["Rudi", "Septian","Zaki","Akmal","Budi"];
const urut = namaUrut.toSorted();
// urutkan isi elemen array sesuai alfabet (default)

console.log(namaUrut); 
// ["Rudi", "Septian","Zaki","Akmal","Budi"] 
console.log(urut); 
// ["Akmal","Budi","Rudi","Septian","Zaki']

const angka = [10, 2,105, 30, 1, 44,12];
const angkaUrut = angka.toSorted((a, b) => a - b); 
//Buat array baru dari angka, lalu urutkan secara numerik dari kecil ke besar menggunakan fungsi pembanding.
console.log(angkaUrut); 
// [1, 2, 10, 12, 30, 44, 105]


//reverse() >>
//reverse() : berfungsi membalikkan urutan elemen array
const array = ["satu", "dua", "tiga", "empat", "lima"];
console.log("array:", array);
//Ambil array, lalu balik urutannya dari belakang ke depan.
// hasil output: "array:" Array ["satu", "dua", "tiga", "empat", "lima"]

const reversed1 = array.reverse();
console.log("reversed:", reversed1);
// hasil output: "reversed:" Array ['lima', 'empat', 'tiga', 'dua', 'satu']

console.log("array:", array);
//reverse() : akan mengubah juga urutan dari array aslinya
// hasil output: "Array:" Array ['lima', 'empat', 'tiga', 'dua', 'satu']

const array2 = ["satu", "dua", "tiga", "empat", "lima"];
console.log("array:", array2);
const reversed2 = array2.toReversed();
console.log("toReversed:", reversed2);
//reverse() : tidak mengubah urutan dari array aslinya
// hasil output: "toReversed:" Array ['lima', 'empat', 'tiga', 'dua', 'satu']

console.log("array:", array2);
// hasil output: "array:" Array ['lima', 'empat', 'tiga', 'dua', 'satu']
