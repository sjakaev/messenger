import './assets/style.scss';
import Handlebars from "handlebars";
import * as Pages from './pages';
import * as Components from './components';

const pages: { [key: string]: [any, {info: string}] } = {
    'login'   : [ Pages.login, {info: 'логинчик'} ],
    'register': [ Pages.register, {info: 'регистрация'} ],
    'chat': [ Pages.chat, {info: 'чатик'} ],
    'user-settings': [ Pages.userSettings, {info: 'настройки'} ],
    'error404': [ Pages.notFound, {info: 'ошибочка 404'} ],
    'error500': [ Pages.serverError, {info: 'ошибочка 500'} ],
};

Object.entries(Components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, <Handlebars.TemplateDelegate<any> | string>component);
});

function navigate(page: string) {
    const [ source, context ] = pages[page];
    const container = document.getElementById('app');
    if (container) {
      container.innerHTML = Handlebars.compile(source)(context);
    }
};

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
    const targetElement = e.target as Element;
    const page = targetElement.getAttribute('page');
    if (page) {
      navigate(page);
    }
    e.preventDefault();
    e.stopImmediatePropagation();
});
