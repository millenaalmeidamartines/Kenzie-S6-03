const carro = {
    placa: "ABC123",
    classes:["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function potenciaReal() {
    if (carro.luxo) {
        return carro.potencia ** 2;
    }
    
    return carro.potencia;
}

console.log(potenciaReal());