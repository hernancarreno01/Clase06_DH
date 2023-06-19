const botella = {
    vacia: true,
    destapada: false,
    capacidad: 500,
    medida: "Ml",
    material: "Plastico",
    vaciarBotella: function(){
        if (this.vacia == false){
            if (this.destapada == false){
                this.destapada = true
            }
            this.vacia = true
            return "Vaciamos la botella!!"
        }
        else {
            return "La botella está vacia!!"
        }
    }
}
/*
console.log(botella)

console.log(botella.vaciarBotella())

console.log(botella.color)

botella.color = "Celeste"

botella.color = "Rojo"

//botella.color = undefined

delete botella.color

botella.contenido = ["Agua", "Coca", "Pepsi", "Sprite", "Limonada", "Jugo de naranja"]

botella.contenido
console.log(botella)

const key = "contenido"

console.log(botella[key][0])*/
/*
console.log(Object.keys(botella))
console.log(Object.values(botella))
*/

/*
const propiedades = Object.keys(botella)
for (let i=0; i<propiedades.length; i++){
    console.log(botella[propiedades[i]])
}*/

/*
for (let i in botella) {
    console.log(botella[i])
}*/



module.exports = botella;