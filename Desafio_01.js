let electrodomesticos = ['microondas', 'lavarropas', 'heladera', 'lavavajillas', 'pava electrica', 'licuadora'];
console.log(electrodomesticos[3]);
console.log(electrodomesticos[4]);

let extraido = electrodomesticos.shift();
electrodomesticos.push(extraido);
console.log(electrodomesticos);

electrodomesticos.push('televsior', 'radio');
console.log(electrodomesticos);

console.log(electrodomesticos.length);

if(electrodomesticos.includes('radio')){
    console.log('Existe radio');
} else {
    console.log('No existe radio');
}

let cadena = electrodomesticos.join(' ');
console.log(cadena);

let cambio = cadena.replace('radio', 'ps5');
console.log(cambio);

console.log(cambio.split(' '));