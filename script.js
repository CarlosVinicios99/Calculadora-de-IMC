function calcularIMC(altura, peso){
    return peso / Math.pow(altura, 2)
}

function classificarIMC(imc, nome){
    if(imc < 18.5){
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está abaixo do peso normal.`
    }

    else if(imc <= 24.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está com o peso normal.`
    }

    else if(imc <= 29.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está com sobrepeso.`
    }

    else if(imc <= 34.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está Obesidade Grau 1.`
    }

    else if(imc <= 39.9){
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está com Obesidade Grau 2.`
    }

    else {
        return `${nome} seu IMC é ${imc.toFixed(2)}<br>Você está com Obesidade Grau 3.`
    }
}

function exibirResultado(resultado){
    console.log(resultado)
    document.querySelector("#resultado").innerHTML = resultado
}

const botaoDeCalcular = document.querySelector("#botao-calcular")

botaoDeCalcular.addEventListener("click", e => {
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value
    const peso = document.querySelector("#peso").value

    const imc = calcularIMC(altura, peso)
    resultado = classificarIMC(imc, nome)
    exibirResultado(resultado)
})

