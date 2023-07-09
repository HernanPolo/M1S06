
export const mediaCalc=function calculaMedia(numer){
    let media=numer.reduce((num1,num2)=> num1+=num2)
    return console.log(media / numer.length)
    }

