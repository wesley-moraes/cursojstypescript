function semRetorno(...args: string[]): void{
    console.log(args.join(' '));
}

semRetorno('Luiz', 'Wesley', 'Luiza');

const pessoa = {
    nome: 'Wesleyy',
    sobrenome: 'Moraess',
    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

pessoa.exibirNome();

export {pessoa}
