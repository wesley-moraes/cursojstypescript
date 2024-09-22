type MapStringsCallBackfn = (item: string | number) => string | number;

function map(
    array: string[] | number[],
    callbackfn: MapStringsCallBackfn,
): (string | number)[] {
    const newArray: (string | number)[] = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
            newArray.push(callbackfn(item)); // Erro nessa linha
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMap = map(abc, (item: any) => {
    if(typeof item === 'string'){
        return item.toUpperCase();
    }
    return item;
});

console.log(abcMap);
