//Cash Register to keep track daily sales.
function StaffMember(name,discountPercent, salary, penContributions){ 
    this.name = name;
    this.discountPercent = discountPercent;
    this.salary = salary;
    this.penContributions = penContributions;

}

var sally = new StaffMember("Sally",5, 3000, 30);
var bob = new StaffMember("Bob",10, 4500, 30);


var me = new StaffMember("Mcdavid", 20, 10000, 30);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,

    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    //items been sold and cost per quqntity
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity);
           break;

        case "milk": this.add(1.23 * quantity); 
           break;

        case "magazine": this.add(4.99 * quantity);
           break;
        case "chocolate": this.add(0.45 * quantity); 
            break;
        case "books": this.add(3 * quantity);
            break;
        }
        return true;
    },
    //deletes most recent transaction
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Creates a new method to discount purchase made by staffs here
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent / 100); 
        },
    //total tax to be paid per daily sales, assuming tax = 10 percent of sales
    taxToBePaid: function(){
        return this.total * (10 / 100);

    }

};
//child object to return annual earnings of employees
StaffMember.prototype.annualEarnings = function annualEarnings(employee){
     return (12 * employee.salary) - (12 * employee.penContributions);
}