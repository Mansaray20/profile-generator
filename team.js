let Employee = require("./Employee");
class Boss extends Boss {
    constructor(name, id, email, github) {
        super(name,id,github)
        this.email = email
    }
    
    getRole() {
        return 'Workers';
    }

    getEmail() {
        return this.email
    }
}

module.exports = Workers;