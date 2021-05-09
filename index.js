const Calculate = {
  factorial(inputNumber){
    if (inputNumber===0){
      return 1;
    }
    
    let numberArray=Array.from(Array(inputNumber).keys()) // create an array of length inputNumber from the keys of the iterable Array(inputNumber)'s index
    numberArray.shift() // removes the first element, which is 0
    numberArray.push(inputNumber) // adds inputNumber to the end as it used to end and inputNumber-1
    const product =numberArray.reduce((aggregate, currentVal)=>{
      return aggregate*currentVal;
    });
    return product
  }
}

module.exports = Calculate;


