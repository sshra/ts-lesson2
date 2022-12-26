
import { User, persons } from "./TS-Contacts-01";

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person =
  | User
  | Admin;

const persons2: Person[] = persons;
persons2.push({
  name: 'Ben John',
  age: 45,
  role: 'Lead admin',
});

const logPerson2 = (human: Person) => {
  if ('role' in human) {
    console.log(`${human.name}, ${human.age}, role: ${human.role}`);
  } else {
    console.log(`${human.name}, ${human.age}, group: ${human.group}`);
  }
};

persons2.forEach(logPerson2);
