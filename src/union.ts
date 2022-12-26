let count: number | void;

count = 1;

let obj: {} | null = null;

obj = {
  name: 'Max',
  age: 35,
};

const logger = (id: string | number): void => {
  if (typeof id === 'string') {
    console.log(id);
  } else {
    console.log(id);
  }
  return undefined;
};

const loggerObj = (obj: {a: number} | {b:number}) => {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    obj.b;
  }
};

const loggerError = (err: string[] | string | Error) => {
  if (Array.isArray(err)) {
    for (const str of err) {
      str;
    }
  } else if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err);
  }
}

const loggerError2 = (err: string): never => {
  throw new Error(err);
}

const hole: null = null;
const vacuu: void = undefined;
