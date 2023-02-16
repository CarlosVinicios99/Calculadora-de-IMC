function calcularIMC(altura, peso){
    return peso / Math.pow(altura)
}

function classificarIMC(imc, nome){
    if(imc < 18.5){
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está abaixo do peso normal`
    }

    else if(imc <= 24.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está com o peso normal`
    }

    else if(imc <= 29.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está com sobrepeso`
    }

    else if(imc <= 34.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está Obesidade Grau 1`
    }

    else if(imc <= 39.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está com Obesidade Grau 2`
    }

    else {
        return `${nome} seu IMC é ${imc.toFixed(2)}\nVocê está com Obesidade Grau 3`
    }
}

function exibirResultado(resultado){
    document.querySelector("#descricao-resutado").innerText(resultado)
}


const botaoDeCalcular = document.querySelector("#botao-calcular")

botaoDeCalcular.addEventListener("onclick", e => {
    e.preventDefault()

    const nome = document.querySelector("#nome").nodeValue
    const altura = document.querySelector("#altura").nodeValue
    const peso = document.querySelector("#peso").nodeValue

    const imc = calcularIMC(altura, peso)
    resultado = classificarIMC(imc, nome)
    exibirResultado(resultado)
})

