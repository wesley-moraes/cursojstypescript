//Array<T> - T[]
//Array<T> -> Generics
export function multiplicaArgs(...args: Array<number>):number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

export const resultMult = multiplicaArgs(1, 2, 3);

console.log(resultMult);


export function concatenaStrings(...args: string[]):string {
    return args.reduce((ac, valor) => ac + valor);
}

const concatenacao = concatenaStrings('a', 'b', 'c');

console.log(concatenacao);

export function toUpperCase(...args: string[]): string[]{
    return args.map(valor => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');

console.log(upper);
