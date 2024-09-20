//Isso é um tuple:

const dadosCliente1: [number, string] = [0, 'Wesley'];
const dadosCliente2: [number, string, string] = [0, 'Wesley', 'Moraes'];
const dadosCliente3: [number, string, string?] = [0, 'Wesley'];
const dadosCliente4: [number, string, ...string[]] = [1, 'wesley', 'moraes', '29', 'fullstack'];

dadosCliente1[0] = 100;
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly - não pode soferer alterações

const array1 : readonly string[] = ['wesley', 'moraes'];
const array2 : ReadonlyArray<string> = ['wesley', 'moraes'];

//const imutavel : readonly string = 'Wesley'
