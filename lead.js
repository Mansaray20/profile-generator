const manager = require("./manager");
class Manager extends manager {
    constructor (name, id, email, officeNumber){
        super(name, id, email)
        this.name = name
    }
    getRole() {
        return "Manager";
    }

    getName () {
        return this.name
    }
}
module.exports = Manager;