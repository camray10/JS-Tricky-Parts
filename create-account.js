function createAccount(pin, initialDeposit = 0) {
    let balance = initialDeposit;
  
    return {
      checkBalance: function (inputPin) {
        return inputPin === pin ? `$${balance}` : "Invalid PIN.";
      },
      deposit: function (inputPin, amount) {
        if (inputPin === pin) {
          balance += amount;
          return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
        }
        return "Invalid PIN.";
      },
      withdraw: function (inputPin, amount) {
        if (inputPin === pin) {
          if (amount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          }
          balance -= amount;
          return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        }
        return "Invalid PIN.";
      },
      changePin: function (oldPin, newPin) {
        if (oldPin === pin) {
          pin = newPin;
          return "PIN successfully changed!";
        }
        return "Invalid PIN.";
      },
    };
  }
  
  module.exports = { createAccount };
  