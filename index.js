const Calculate = {
  factorial(inputNumber){
    let product=1;
    for(let i=1; i<inputNumber+1; i++){
      product*=i;
    }
    return product
  }
}

module.exports = Calculate;


