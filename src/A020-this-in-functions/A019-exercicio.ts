//Tipagem do this
//
export function funcao(this:Date, argumento1: string):void{ //Não é o argumetno da função! É só a tipagem do this
    console.log(this, argumento1);
}

funcao.call(new Date(), 'Luiz'); //Tem que chamar a funcao com call ou apply
