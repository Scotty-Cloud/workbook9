class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(`Employee ${employee1.fullName} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

employee1.promote("Sr. Graphic Artist", 46.75);
console.log(
  `Employee ${employee1.fullName} promoted to ${employee1.jobTitle} with a pay rate of $${employee1.payRate}`
);

console.log();

let employee2 = new Employee(2, "Sarah", "Lee", "Software Engineer", 50.0);
console.log(`Employee ${employee2.fullName} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

employee2.promote("Lead Software Engineer", 60.0);
console.log(
  `Employee ${employee2.fullName} promoted to ${employee2.jobTitle} with a pay rate of $${employee2.payRate}`
);
