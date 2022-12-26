
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

const logPerson2 = ({name, age} : Person) => {
  console.log(`${name}, ${age}`);
};

persons2.forEach(logPerson2);
