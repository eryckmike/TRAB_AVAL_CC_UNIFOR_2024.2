const idadeMinima = 18;

function verificarSePodeDirigir(idade) {
    if (idade >= idadeMinima) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

const idadeTeste = 16;

console.log(verificarSePodeDirigir(idadeTeste));
