const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        super.role = "Manager";

    }

    getOffice() {
        return this.office;
    }
}

module.exports = Manager;