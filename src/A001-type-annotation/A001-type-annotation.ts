let nome : string = "wesley";
let nome2 = "wesley";


//Este tipo de escrever é redundante, porque ele faz a inferência.
let idade : number = 30; //10, 1.57, 0xf00d(hexadecimal), 0b1001(binário), etc
let adulto : boolean = true; //Apenas true ou false
let simbolo : symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n

//let errado : number = '33'; //Não aceita!

//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ["Wes", "Luh", "Juh"];
let arrayDeStrings2: string[] = ["Wes", "Luh", "Juh"];


//Objetos
export let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Wess',
    idade: 29,
}

console.log(pessoa.nome);

//Funções

//function soma(x: number, y:number){
function soma(x: number, y:number): number{
    return x + y;
}
const result = soma(2, 2);

//type aliance
const soma2: (x: number, y: number) => number = (x, y ) => x + y;


