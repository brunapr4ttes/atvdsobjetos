const data = require('./onibus.json')
// Escreva uma função que aceite o ID da linha como entrada e retorne todas as paradas associadas a essa linha, ordenadas pela ordem de parada.

const id = 1
function consultarParadas(){
data.linhas.map((elemento)=>{
    if(elemento.id === id){
        console.log(`Paradas associadas: ${elemento.paradas}`)
    }
})}
console.log(consultarParadas())


