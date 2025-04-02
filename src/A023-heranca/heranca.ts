export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getIdade(): number{
        return this.idade;
    }

    getCpf(): string{
        return this.cpf;
    }

    getNomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome;
    }


}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return "Isso vem do aluno " + this.nome + ' ' + this.sobrenome;
    }
}

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return "Isso vem do cliente " + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa("Wesley", "Moraes", 30, "45314642816");
const aluno = new Aluno("Wesley", "Moraes", 30, "45314642816");
const cliente = new Cliente("Wesley", "Moraes", 30, "45314642816");

console.log(pessoa);
console.log(aluno);
console.log(cliente);

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());