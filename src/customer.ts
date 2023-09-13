// Interface for Transaction
interface Transaction {
  amount: number;
  date: Date;
}

class Customer {
  private _id: string;
  private _name: string;
  private _transactions: Transaction[]=[];
  
  constructor(_name: string) {
    this._name = _name;
    this._id = Math.random().toString(36);
  }
  
  get id(): string {
    return this._id;
  }
  
  get name(): string {
    return this._name;
  }
  
  get transactions(): Transaction[] {
    return this._transactions;
  }

  get balance(): number {
    return this._transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  }
  
  addTransaction(amount: number): boolean {
    if (amount < 0) {
      console.log("Balance can not be negative");
      return false; 
    }
    const transaction: Transaction = { amount, date: new Date() };
    this._transactions.push(transaction);
    return true;
  }   
}
  
export default Customer;