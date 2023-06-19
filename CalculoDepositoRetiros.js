let operaciones = [1000, 38000, -15000, -25000, 10000]

function calculoSaldos (movimientos) {
    let retiros = 0
    let depositos = 0
    for (let i = 0 ; i<movimientos.length;i++) {
        if (movimientos[i]<0){retiros+=movimientos[i]}
        else {depositos+=movimientos[i]}
    }

    return [depositos,retiros,retiros+depositos]
} 
// console.log(calculoSaldos(operaciones))

function estadoCuenta (nombre,apellido,movimientos,callback) {
    let resultados = callback(movimientos)

    return [nombre +' '+ apellido, resultados[0],resultados[1],resultados[2]]
}
console.log(estadoCuenta('lautaro','ondarza',operaciones,calculoSaldos))