
const cekHuruf = "MAsam"
let hurufKecil = cekHuruf.toLowerCase()

function cekPalindrom (huruf){
let kata = ""
for (let i = huruf.length-1; i>=0; i--){
    kata += huruf[i] 
}
    if (kata === huruf){
        return "Palindrom"
    }
    else{
        return "Bukan Palindrom"
    }
}

console.log(`Kata dari (${cekHuruf}) adalah : `)
console.log(cekPalindrom(hurufKecil))


