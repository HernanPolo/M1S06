export const suma = function somaArray(numeros){
    let soma= numeros.reduce((num,sig) => num+=sig)
    return console.log(soma)
};

//let exe=[5,36,52,55,25,51]

//console.log(somaArray(exe))