const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function naoMaisLuxo() {
    if (!carro.estacionado) {
        return `O carro ${carro.placa} não está estacionado`
    } else if (!carro.luxo) {
        return `O carro ${carro.placa} não é luxuoso`
    }
        carro.luxo = false;

        return `O carro ${carro.placa} não é mais considerado um carro de luxo`
}

// console.log(carro.luxo);
console.log(naoMaisLuxo());
// console.log(carro.luxo);