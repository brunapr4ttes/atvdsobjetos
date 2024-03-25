const data = require('./onibus.json')
// Implemente uma função que aceite um status como entrada (por exemplo, "em operação" ou "em manutenção") e retorne uma lista de ônibus com esse status.

const status = 'em operação'
function listarStatus(){
data.onibus.map((elemento)=>{
    if(elemento.status === status){
        console.log(`Ônibus com status "${elemento.status}":\n > ${elemento.id}`);
    }
})}
console.log(listarStatus())


