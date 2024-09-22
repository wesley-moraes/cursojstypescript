type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMKYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = CorRGB | CorCMKYK;

const pessoa:Pessoa = {
    nome: 'wesley',
    idade: 29,
    salario: 200_000
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return{...pessoa, corPreferida: cor}
}


console.log(setCorPreferida(pessoa, "Verde" ));
