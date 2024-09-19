const objtoA : {
    chaveA: string;
    chabeB: string;
    chaveC?: string;
    [key:string] : unknown; //Usadoo para abrir o objeto e inserir quantos valores eu quiser
} = {
    chaveA : "valA",
    chabeB : 'ValB'
};

objtoA.chaveA = 'Outro Valor';
objtoA.chabeB = "nova Chave";
objtoA.chaveD = "Valor D";

console.log(objtoA);
