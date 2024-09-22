type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
    nome: 'wes',
    sobrenome: 'moraes',
    idade: 29
}

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type DA = 'D' | 'A';

type intersecao = AB & AC & DA;

console.log(pessoa);



//É possível fazer isso com interface

export {pessoa}
