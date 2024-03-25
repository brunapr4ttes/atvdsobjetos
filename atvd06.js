const data = require('./onibus.json')
// Escreva uma função que aceite o ID de um ônibus como entrada e verifique se há um motorista atribuído a esse ônibus.

const idbusao = "A101"
const onibus = data.onibus
function verificarMotorista(idbusao) {
    for (let i = 0; i < onibus.length; i++) {
        if (onibus[i].id === idbusao) {
            if (onibus[i].motorista !== null && onibus[i].motorista !== undefined) {
                return true; 
            } else {
                return false; 
            }
        }
    };
}

const motoristaExiste = verificarMotorista(idbusao);
if (motoristaExiste) {
    console.log("Este ônibus possui um motorista atribuído.");
} else {
    console.log("Este ônibus não possui um motorista atribuído.");
}