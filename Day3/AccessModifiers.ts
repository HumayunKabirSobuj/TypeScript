{
    // Access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }
 

    class StudentAccount extends BankAccount{
        test(){
            this.
        }
    }


    const poorManAccount = new BankAccount(111, 'Mr. Poor', 20);
    poorManAccount.addDeposit(30)

    const myBalance=poorManAccount.getBalance();
    console.log(myBalance)



    // 
}