function multiplicaArray(num){
    let mult = num.reduce((item1,item2)=> item1*=item2)
    return mult
};

let novo=[3,4,1,2,3];
console.log(multiplicaArray(novo));