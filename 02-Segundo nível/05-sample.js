function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusFuncionario = 200;
    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusFuncionario;
    }
    const desconto = 300;
    const salarioComDesconto = salarioComBonus - desconto;
    const porcentagemAlta = 0.27;
    const porcentagemMedia = 0.18;
    const porcentagembaixa = 0.11;
    const padraoSalarioAlto = 5000;
    const padraoSalarioMedio = 3000;
    let salarioFinal;
    if (salarioComDesconto >padraoSalarioAlto) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * porcentagemAlta);
    } else if (salarioComDesconto > padraoSalarioMedio) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * porcentagemMedia);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * porcentagembaixa);
    }
    return salarioFinal;
}
const horasTeste = 160;
const valorHoraTeste = 25;
const salario = calcularSalarioFuncionario(horasTeste, valorHoraTeste, "gerente");
const quantidadeNumeroPosVirgula = 2;
console.log(`O salário final é: ${salario.toFixed(quantidadeNumeroPosVirgula)}`);
