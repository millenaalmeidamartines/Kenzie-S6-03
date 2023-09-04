const carro = {
    placa: "ABC123",
    classes: ["sedan"],
    luxo: true,
    potencia: 200,
    estacionado: true
}

function adicionarNovaClasse(novaClasse) {
    const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê'];
    const classes = carro.classes;

    if (classes.length >= 3) {
       return `Este carro não pode ter mais classes`
    }

    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        if (classes.includes(novaClasse)) {
            return `O carro já possui a classe ${novaClasse}`;
        }
        classes.push(novaClasse);
        return `Classe ${novaClasse} adicionada com sucesso`;

    }
    return `Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê`
}

console.log(adicionarNovaClasse('cupê'));