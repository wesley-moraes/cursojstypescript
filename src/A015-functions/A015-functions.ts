type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[]{
    const newArray: string[] = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abcMapped);


/*
//Funcao feita sem tipagem! acima, foi criado uma tipagem para a funcao

function mapStrings(array: string[], callbackfn: CallableFunction): string[]{
    const newArray: string[] = [];

    for(let i = 0; i < array.length; i++){
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, function(item: any){
    return item.toUpperCase();
})

console.log(abcMapped);
*/
