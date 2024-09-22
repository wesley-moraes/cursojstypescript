function add(a:number ,b:number):number{
    return a+b;
}

console.log(add(10, 30));

function addConcat(a:number | string, b:number | string): number | string{
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    //if(typeof a === 'string' && typeof b === 'string') return a + b;
    return `${a}${b}`
}

console.log(addConcat(10, 20));
console.log(addConcat('10', '20'));
console.log(addConcat('10', 20));
