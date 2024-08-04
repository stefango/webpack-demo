import { join } from 'lodash-es';
import './style.css';
import Icon from './icon.png';
import yaml from './data.yaml';
import printMe from './print.js';

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('h1');
  const btn = document.createElement('button');

  element.innerHTML = join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
