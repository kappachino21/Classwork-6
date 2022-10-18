class Person {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }

  paid(num) {
    console.log(`${this.name} + is paid + ${num}`);
  }
}

class Marketing extends Person {
  constructor(name, age, experience, team, role) {
    super(name, age, experience);
    this.team = team;
    this.role = role;
  }

  job() {
    console.log("I work in marketing!");
  }

  teamNum() {
    console.log(this.team);
  }
}

class Leader extends Marketing {
  constructor(name, age, experience, team, role, teamSize) {
    super(name, age, experience, team, role);
    this.teamSize = teamSize;
  }

  teamNum() {
    console.log(`I am leader of team ${this.team}`);
  }
}

var tim = new Leader("Tim", 31, 10, 2, "leader", 10);

console.log(tim);

//import { multiply } from "./other.js";

//console.log(multiply(5, 2));

let divide = (q, w) => {
  return q / w;
};

let greeting = (name = "no name") => {
  console.log(`My name is ${name}`);
};

var person = {
  name: "Tim",
  age: 20,
  interest: {
    sports: "Football, Basketball, Tennis",
    hobbies: "Chess, reading",
  },
};

const { age, hobbies } = person;

const fruit = ["apple", "bannana", "orange", "pear", "passionfruit"];

const [item1, item2] = fruit;

console.log(item1);
