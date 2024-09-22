enum Cores{
    vermelho, //0
    azul, //1
    amarelo //2
}

console.log(Cores);
console.log(Cores.vermelho);
console.log(Cores[0]);

//Eu posso criar mais enums e ele vai juntar as variaveis

enum Cores{
    verde = "verde",
    rosa = 10,
    purpura
}

console.log(" ");
console.log(Cores);

export function escolhaCor(cor: Cores): void{
    console.log(Cores[cor]);
}

console.log(" ");
console.log(" ");
console.log(Cores.vermelho);
console.log(Cores[11]);
