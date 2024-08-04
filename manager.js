const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees
    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    calculateBonus(multiplier){
        const totalSalary = this.salary + this._totalSubSalary();
        return totalSalary * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary;
                sum += employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }
        return sum;
    }

}

module.exports = Manager;
