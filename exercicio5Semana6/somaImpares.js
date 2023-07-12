export const somaImpar =function somaImpares(numeros){
    let impares=numeros.filter((numero) => numero % 2 !== 0)
    console.log(`Os numeros impares da lista são : ${impares}`)
    let somaImp = impares.reduce((n1,n2)=> n1+n2)
    return console.log(`A soma total de todos os numeros impares é ${somaImp}`)
}
//let num =[5,2,2,1,4,8,6,2,9,7,12,65,14]
//somaImpar(num)