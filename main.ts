console.log('Hello World!');
import './src/assets/style.scss';
import Handlebars from "handlebars";
import * as Pages from './src/pages';

const pages = {
    'login'   : [ Pages.login, {info: 'логинчик'} ],
    'register': [ Pages.register, {info: 'регистрация'} ],
    'chat': [ Pages.chat, {info: 'чатик'} ],
    'user-settings': [ Pages.userSettings, {info: 'настройки'} ],
    '404': [ Pages.notFound, {info: 'ошибочка 404'} ],
    '500': [ Pages.serverError, {info: 'ошибочка 500'} ],
};

function navigate(page: string) {
    const [ source, context ] = pages[page];
    const container = document.getElementById('app');
    container.innerHTML = Handlebars.compile(source)(context);
  }

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
  }
  e.preventDefault();
  e.stopImmediatePropagation();
});

console.log('pages = ', pages);
