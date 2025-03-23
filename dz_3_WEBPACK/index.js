import './index.css';
import jsPhoto from './assets/JS-photo.png';

console.log('Hello World!');

const h2 = document.createElement('h2');
h2.textContent = 'I love JavaScript';
const img = document.createElement('img');
img.src = jsPhoto;
document.querySelector('body').append(h2);
document.querySelector('body').append(img);
console.log(jsPhoto);