import './style.scss';
import {App} from './app';
import { SwatchComponent } from './swatch-component';

console.log('hello world');
const s = document.getElementById('ripple-holder')
console.log()
const app = new App(1000,1000);
app.init();