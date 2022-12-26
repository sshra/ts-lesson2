import { locale } from "./locale";

// litetal type
const a = 2;

let b: 2 | 3 = 2;

type httpMethod = 'GET' | 'POST';

const apiService = (url: string, method: 'POST' | 'GET') =>
  fetch(url, {
    method,
  });

const method = 'POST';

const obj2: {
  method: 'POST'
} = {
  method: 'POST'
}

apiService('https:/site.com', method);

const translate = (lang: locale, text: string): string => {
  // TODO translate
  return text;
}

translate(locale.EN, 'Some text');

console.log(locale);

const enum TypeUser {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
};

console.log(TypeUser.admin);
