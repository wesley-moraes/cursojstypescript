

//T[] - Array Type
//Array<T> -> Generics
export function multiplicaArgs(...args: Array<number>):number {
    return args.reduce((ac, valor) => ac * valor, 1)
}
export const resultMult = multiplicaArgs(1, 2, 3);
console.log(resultMult);

export function multiplicaArts2(args: Array<number>):number {
    return args.reduce((ac, valor) => ac * valor, 1);
}
const resultMult2 = multiplicaArts2([1, 2, 3]);
console.log("reuslt mult 2: " + resultMult2)


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

export function concatenaRE(args: string[]): string{
    return args.join();
}
const allRE = concatenaRE(['RE1', 'RE2', 'RE3']);
console.log(allRE);

export function concatenaRE2(args: string[]): string[]{
    return args;
}
const allRE2 = concatenaRE2(['RE1', 'RE2', 'RE3']);
console.log(allRE2);
