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
  const labelWelcome = document.querySelector(".welcome");
  const labelDate = document.querySelector(".date");
  const labelBalance = document.querySelector(".balance-value");
  const labelSumIn = document.querySelector(".summary-value-in");
  const labelSumOut = document.querySelector(".summary-value-out");
  const labelSumInterest = document.querySelector(".summary-value-interest");
  const labelTimer = document.querySelector(".timer");
  
  const containerApp = document.querySelector(".app");
  const containerMovements = document.querySelector(".movements");
  
  const btnLogin = document.querySelector(".login-btn");
  const btnTransfer = document.querySelector(".form-btn-transfer");
  const btnClose = document.querySelector(".form-btn-close");
  const inputLoginUserName = document.querySelector(".login-input-user");
  const inputLoginPin = document.querySelector(".login-input-pin");
  const inputTransferTo = document.querySelector(".form-input-to");
  const inputTransferAmount = document.querySelector(".form-input-amount");
  const inputCloseUser = document.querySelector(".form-input-user");
  const inputClosePin = document.querySelector(".form-input-pin");
  
  const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = "";
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? "deposit" : "withdrawal";
  
      const html = `
          <div class="movements-row">
            <div class="movements-type movements-type-${type}">${
        i + 1
      } ${type}</div>
            <div class="movements-value">${mov}€</div>
          </div>
        `;
  
      containerMovements.insertAdjacentHTML("afterbegin", html);
    });
  };
  
  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
  };
  
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter((mov) => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;
  
    const out = acc.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;
  
    const interest = acc.movements
      .filter((mov) => mov > 0)
      .map((deposit) => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
  };
  
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("");
    });
  };
  createUsernames(accounts);
  
  const updateUI = function (acc) {
    displayMovements(acc.movements);
  
    //display balance
    calcDisplayBalance(acc);
  
    //display summary
    calcDisplaySummary(acc);
  };
  
  //btnLogin event handler
  let currentAccount;
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    currentAccount = accounts.find(
      (acc) => acc.username === inputLoginUserName.value
    );
    console.log(currentAccount);
    if (currentAccount.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome back , ${
        currentAccount.owner.split(" ")[0]
      }`;
      containerApp.style.opacity = 100;
    }
  
    //clear input
    inputLoginUserName.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  
    updateUI(currentAccount);
  });
  
  // btnTransfer
  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      (acc) => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
  
      updateUI(currentAccount);
    }
  });
  btnClose.addEventListener("click", function (e) {
    e.preventDefault();
  
  
    if (
      inputCloseUser.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        (acc) => acc.username === currentAccount.username
      );
      console.log(index);
  
      //xóa account
      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
    }
    inputClosePin.value = inputCloseUser.value ="";
  });