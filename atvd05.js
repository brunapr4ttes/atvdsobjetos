const data = require('./onibus.json')
// Crie uma função que aceite o ID de um ônibus como entrada e retorne todas as informações sobre esse ônibus.

const idbusao = "A103"
const onibus = data.onibus
const informacoesOnibus = listarInformacoes(idbusao)
console.log(informacoesOnibus)


function listarInformacoes(idbusao){
    for (let i = 0; i < onibus.length; i++) {
        if (onibus[i].id === idbusao) {
            return onibus[i];
        }
    }
    return "Ônibus não encontrado";
}
