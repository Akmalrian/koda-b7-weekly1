
function genMultiplicationTable(jumlah) {
  for (let baris = 1; baris <= jumlah; baris++) {
    let angka = ""
    for (let kolom = 1; kolom <= jumlah; kolom++) {
      angka = angka+(baris*kolom)+" "
    }
    console.log(angka);
  }
}
genMultiplicationTable(5);
