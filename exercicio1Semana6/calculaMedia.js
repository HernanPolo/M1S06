
function calculaMedia(numer){
    let media=numer.reduce((num1,num2)=> num1+=num2)
    return media / numer.length
    }
 let exemp= [3,4,1,2,3]
 console.log(calculaMedia(exemp))