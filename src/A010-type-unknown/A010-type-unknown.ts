let x : unknown;

x = 10;
x = "loras";
x = 13;
//x = "hey";
let y = 10;

//const result = x + y;
if(typeof x === 'number'){
    console.log(x + y)
}else{
    console.log('Deu ruim')
}

//Ele te força a fazer verificações! O any não! O any permitira concatenar os valores.
