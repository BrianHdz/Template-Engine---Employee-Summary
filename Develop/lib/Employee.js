// constructor function which can take in a series of values and create objects
// with the properties contained inside
class Employee {
    constructor(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
    }

    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    };
};


module.exports = Employee;


