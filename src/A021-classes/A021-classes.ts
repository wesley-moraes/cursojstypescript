import { isPostalCodeLocales } from "validator";

export class Empresa{
    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    //versao longa para definicao de uma variavel
    public readonly nome : string; //Depois de inicializado, não é possível mais alterar o valor dele!
    //porque ele é um readonly
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    adicionaColaborador(colaborador: Colaborador):void {
        this.colaboradores.push(colaborador);
    }

    mostraColaboradores():void{
        for (const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
}

export class Colaborador{
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ){}
}

const empre1 = new Empresa('STN', '11.111.111/0001');
//console.log(empre1.nome);
//console.log(empre1)

const colaborador1 = new Colaborador('wesley', 'moraes');
const colaborador2 = new Colaborador('Luh', 'Mota');
const colaborador3 = new Colaborador('Samuel', 'Grande');

empre1.adicionaColaborador(colaborador1);
empre1.adicionaColaborador(colaborador2);
empre1.adicionaColaborador(colaborador3);

empre1.mostraColaboradores();
//console.log(empre1)
//empre1.nome = 'nomees';
