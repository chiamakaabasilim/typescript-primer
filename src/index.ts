let name: string = "Pius";

console.log(name)

let count: number = 10

name = 'Paul';

console.log(name)

count = 5

import travisLog,  {Gender, IPersonData, Person} from './tools'

/*
const person1 = new Person(
    "Fathia",
    "Salaudin",
    "female",
    1.7,
    ["singing","baking","etc"],
    new Date("1990-03-03"),
    true
    
);*/

const person1Data: IPersonData = {
    firstName: "Fathia",
    lastName: "Salaudin",
    gender: Gender.F,
    height: 1.7, //question mark here means optional
    hobbies:["singing","dancing"],
    birthday: new Date("1990-08-23"), //question mark here means optional
    isAlive: true

}
const person1 = new Person(person1Data);

//const pronoun = person1.gender === "male"? "he":"she";

const pronoun = person1.gender === Gender.M? "He" : "She";

travisLog(`the first person is ${person1.firstName} ${person1.lastName},
${pronoun}likes ${person1.hobbies.join(", ")}. ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
travisLog(person1.firstName);


                                                                                                                                                                                                        

