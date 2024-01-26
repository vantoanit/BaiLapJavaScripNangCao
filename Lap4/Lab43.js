

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  //1.
  const bankDepositSum = accounts
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, curr) => sum + curr, 0);
  console.log(bankDepositSum);
  
  //2.
  const numbDeposits1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
  
  console.log(numbDeposits1000);
  
  //3.
  const { deposits, withdrawals } = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
      (sums, cur) => {
        //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
        sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
        return sums;
      },
      { deposits: 0, withdrawals: 0 }
    );
  // console.log(sums);
  console.log(deposits, withdrawals);
  
  //4.
  
  const convertTitleCase = function (title) {
    const execptions = ["a", "an", "the", "but", "or", "on", "in", "with"];
    const titleCase = title
      .toLowerCase()
      .split(" ")
      .map((word) =>
        execptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
      ).join(' ');
    return titleCase;
  };
  
  console.log(convertTitleCase("this is a nice title"));
  console.log(convertTitleCase("this is a LONG title but not too long"));
  console.log(convertTitleCase("and here is another title with an EXAMPLE"));