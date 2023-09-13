import Customer from "./customer";

class Branch {
    private _name : string;
    private _customers: Customer[] = [];
       
    constructor(_name: string) {
        this._name = _name;
    }

    get name(): string {
        return this._name;
    }

    get customers(): Customer[] {
        return this._customers;
    }
    
    addCustomer(customer: Customer): boolean {
        if (!this._customers.includes(customer)) {
          this._customers.push(customer);
          console.log("Customer added successfully");
          return true;
        }
        return false; // Customer already exists in the branch
    }

    addCustomerTransaction(customerId: string, amount: number): boolean {
        const customer = this.findCustomer(customerId);
        if (customer) {
          return customer.addTransaction(amount);
        }
        return false; // Customer not found
    }

    findCustomer(customerId: string): Customer | null {
        return this._customers.find((customer) => customer.id === customerId) || null;
     }
}
export default Branch;