const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrented = dogsJulia.slice();
    dogsJuliaCorrented.splice(0, 1); //[5,2,12,7]
    dogsJuliaCorrented.splice(-2); //[5,2]
  
    //2
    const dogs = dogsJuliaCorrented.concat(dogsKate);
  
    
    console.log(dogs);
    //3
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i} is and adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i} is still a puppy`);
      }
    });
    
  };
  
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);