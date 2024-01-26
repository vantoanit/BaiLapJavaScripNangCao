const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  
  //1
  dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
  // console.log(dogs);
  
  //2
  const doSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
  console.log(doSarah);
  console.log(
    `Sarah's dog is eating too ${
      doSarah.curFood > doSarah.recFood ? "much" : "little"
    }`
  );
  
  //3
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners);
  //   .flat();
  console.log(ownersEatTooMuch);
  
  //
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners);
  //   .flat();
  console.log(ownersEatTooLittle);
  
  //4
 
  console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
  console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little!`);
  
  //5
  console.log(dogs.some((dog) => dog.curFood === dog.recFood));
  
  //6

  
  const checkEating = (dog) =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
  
  console.log(dogs.some(checkEating)); //true
  
  //7
  console.log(dogs.filter(checkEating));
  
  //8 sort
  const dogsSort = dogs.slice().sort((a, b) => a.recFood - b.recFood);
  console.log(dogsSort);