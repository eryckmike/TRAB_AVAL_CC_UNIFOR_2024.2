const taxaFrete = 10;


function calcularFrete(distancia) {
    return distancia * taxaFrete;
}

const distanciaTeste = 50;

const frete = calcularFrete(distanciaTeste);
console.log(`O valor do frete é: ${frete}`);
