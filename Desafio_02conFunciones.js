let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis','Thor: amor y trueno'];

function extraerYAgrandar(array){
    let extraer = array.pop();
    let agrandar = extraer.toUpperCase();
    peliculas.unshift(agrandar);
    return array;
}

console.log(extraerYAgrandar(peliculas));

let proximasPeliculas = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];

proximasPeliculas.shift();

console.log(proximasPeliculas);

function nuevoArray(array1, array2){
    let nuevasPeliculas = array1.concat(array2);
    return nuevasPeliculas;
}

console.log(nuevoArray(peliculas, proximasPeliculas));