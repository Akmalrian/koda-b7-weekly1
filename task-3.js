
let celcius = 26;
let farenheit = 79;
function konversiSuhu(celcius,farenheit){
    let hasilFarenheit = (celcius * 9/5) + 32
    let hasilCelcius = (farenheit -32) * 5/9
    console.log(`Hasil Konversi dari ${farenheit} Farenheit adalah ${hasilCelcius} Celcius`)
    console.log(`Hasil Konversi dari ${celcius} Celcius adalah ${hasilFarenheit} Farenheit`)
}

konversiSuhu(celcius,farenheit)
