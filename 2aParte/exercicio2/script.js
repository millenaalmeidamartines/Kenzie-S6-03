const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function verificarClasses() {
    if (carro.classes.length === 1) {
        return carro.classes[0];
    }
    return carro.classes;
    
}

console.log(verificarClasses());