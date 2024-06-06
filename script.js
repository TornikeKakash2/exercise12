// დავალება 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.name, this.age);
  }
}

const person1 = new Person("John", 32);
const person2 = new Person("Michael", 27);

person1.greet();
person2.greet();

// დავალება 3

class Student extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  greet() {
    console.log(
      `My name is ${this.name} and i am ${this.age} and for now i am ${this.job}`
    );
  }
}

const student = new Student("Bob", 23, "student");
student.greet();
