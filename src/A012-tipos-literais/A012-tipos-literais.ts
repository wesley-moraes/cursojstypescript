let a:'wes';

const b = 100;

export const pessoa = {
    nome: 'wesley' as const,
    sobrenome: 'moraes'
};

function escolhaCor(cor: 'Vermelho' | 'Verde' | 'Rosa'): string{
    return cor
}

let corEscolhida:string = escolhaCor('Vermelho');
console.log(corEscolhida);
