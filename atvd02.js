const data = require('./onibus.json')
// Implemente uma função que mostre quantos ônibus estão disponíveis para uma determinada linha.

const linhas = 1
function consultarOnibusDisponivel(){
data.onibus.map((elemento)=>{
    if(elemento.linha === linhas){
        console.log(`Ônibus disponíveis: ${elemento.id}`)
    }
})}
console.log(consultarOnibusDisponivel())


