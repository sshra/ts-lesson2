const enum Group {
  SEO = 'SEO-специалист',
  Musician = 'Музыкант',
  Family = 'Семья',
  Friends = 'Друзья',
}

export type User = {
  name: string,
  age: number,
  group: Group
};

export const persons: User[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: Group.SEO,
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: Group.Musician,
  },
  {
    name: 'Захват Сараев',
    age: 21,
    group: Group.Friends,
  },
  {
    name: 'Угон Камазов',
    age: 22,
    group: Group.Family,
  },
  {
    name: 'Подрыв Алмазов',
    age: 23,
    group: Group.Family,
  },
];

const logPerson = ({name, age} : User): void => {
  console.log(`${name}, ${age}`);
}

console.log('Users:');
// persons.forEach(logPerson);