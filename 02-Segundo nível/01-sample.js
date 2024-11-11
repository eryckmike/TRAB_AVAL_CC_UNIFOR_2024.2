const porcentagemDesco = 0.15;
const preco = 100;

function calcularDesconto(preco) {
    return preco - (preco * porcentagemDesco);
}

const precoFinal = calcularDesconto(preco);
console.log(`Preço com desconto: ${precoFinal}`);
