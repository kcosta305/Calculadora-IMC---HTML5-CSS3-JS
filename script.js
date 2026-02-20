function calcularTudo() {
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

if (peso > 0 && altura > 0 ){
    let imc = peso / (altura * altura)
    
    document.getElementById("resultado-imc").innerText = "O seu IMC é: " + imc.toFixed(2);

    let mensagem = "";
    
    if(imc < 18.5) {
        mensagem = "Você está magrinho (abaixo do peso).";
        
    }else if (imc >= 18.5 && imc < 25) {
        mensagem = "Você está nota 10 (peso normal)!";

    }else {
        mensagem = "Você está fortão (Sobrepeso/Obesidade).";

    }

    document.getElementById('classificacao').innerText = "Status: " + mensagem;
     
    } else {

    alert("Ei você esqueceu de colocar o peso ou a altura!")
    }

}
    