const calcAverageHumanAge = (ages) => {
    console.log(ages);
    const humanAge = ages.map((age) => {
      if (age > 2) {
        return 16 + age * 4;
      } else {
        return age * 2;
      }
    });
    console.log(humanAge);
    const adults = humanAge.filter((age) => {
      if (age >= 18) {
        return age;
      }
    });
    console.log(adults);
  
    const average = adults.reduce((acc, age) => {
      return acc + age / adults.length;
    }, 0);
    return average;
    
  };
  
  console.log('=======TEST DATA 1========')
  const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  console.log('=======TEST DATA 2========')
  const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  
  console.log(avg1,avg2);