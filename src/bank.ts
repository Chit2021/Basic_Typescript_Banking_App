import  Branch  from './branch';
import Customer from './customer';

class Bank {
    private _branches: Branch [] = [];

    constructor(private _name: string){
        this._name = _name;
        this._branches = [];
    }

    get branches(): Branch[] {
         return this._branches;
     }

    get name(): string {
        return this._name;
    }
   //Add new branch to bank
    addBranch(branch: Branch): boolean {
        if (!this._branches.includes(branch)) {
           this._branches.push(branch);
           console.log("Branch has been added to Bank successfully!")
           return true;
         }
         return false;
       }
    // //Add customer to branch
     addCustomer(branch: Branch, customer: Customer): boolean {
        if (this._branches.includes(branch)) {
            console.log("Customer added to branch successfully");
            return branch.addCustomer(customer);   
        }
         return false;
       }

    addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean {
        if (this._branches.includes(branch)) {
          return branch.addCustomerTransaction(customerId, amount);
        }
        return false;
      }

    findBranchByName(name:string){
        const branch= this._branches.find(branch=>branch.name.toLowerCase().includes(name.toLowerCase()))
        if(branch){
             console.log(`Branch ${name} information has been retrieved successfully!`)
           return branch
        }
        console.log(`No branches found matching the searching keyword "${name}".` )
        return null
     }

    checkBranch(branch: Branch): boolean {
        return this._branches.includes(branch);
    }

    listCustomers(branch: Branch, includeTransactions: boolean): boolean {
        if (this.checkBranch(branch)) {
           console.log(`Customers of branch "${branch.name}":`);
        branch.customers.forEach((customer) => {
            console.log(`Customer: ${customer.name}`);
            if (includeTransactions) {
                console.log(`Transactions:`, customer.transactions);
                console.log(`Balance: ${customer.balance}`);
            }
           });
           return true;
         }
         console.log(`Branch does not belong to this bank`);
         return false; // Branch does not belong to this bank
    }
}

export default Bank;