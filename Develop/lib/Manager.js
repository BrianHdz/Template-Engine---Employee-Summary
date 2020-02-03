const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, officeNumber) {
      super(name,id, title);
      this.officeNumber = answers.officeNumber;
    }
    getOfficeNumber = () => { "Office Number: 1" }
    getRole = () => { return "Manager"};
  }





  module.exports = Manager;

