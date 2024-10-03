type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
    username: string,
    password: string
}

const verifyUser: VerifyUserFn = (user, sentValue) =>{
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
}

const dbUser = {username: 'joao', password: '123456'};
const sentUser = {username: 'joao', password: '123456'};

const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);

//O que acontece, é que eu posso passar outros valores que o JS/TS não vai brigar comigo!
//Porque ele não liga! Desde que você respeite a tipagem da função! Ou seja, tem que ter o que
//Foi solicitado! O que virá depois, ele não liga!
//É importante destacar isso porque tem linguagens que são fortemente tipadas! E pode dar erro
//Se você arriscar inserir outros campos que não foram tipados.
