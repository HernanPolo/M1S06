export const soPares= function filtrarPares(numeros) { 
    let pares=numeros.filter((numero) => numero % 2 === 0)
    return console.log(`Os numeros pares da lista são ${pares}`)
};

//let num =[5,2,2,1,4,8,6,2,9,7,12,65,14]
//soPares(num)