const data = require('./onibus.json')
// Crie uma função que aceite o ID da linha como entrada e retorne os horários de partida e chegada para essa linha.

const id = 1
function consultarHorario(){
data.linhas.map((elemento)=>{
    if(elemento.id === id){
        console.log(elemento.horarios)
    }
})}
console.log(consultarHorario())



