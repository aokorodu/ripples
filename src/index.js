import './style.scss';
import {App} from './app';

console.log('hello world');
const s = document.getElementById('ripple-holder')
console.log()
const app = new App(1000,1000);
app.init();