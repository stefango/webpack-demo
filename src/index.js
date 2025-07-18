import './style.css';
import { join } from 'lodash-es';
import React from 'react';
import { createRoot } from 'react-dom/client';
import yaml from './data.yaml';
import Icon from './icon.png';
import { Index } from './pages';
import printMe from './print';

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

function reactComponent() {
  document.body.innerHTML = '<div id="app"></div>';
  const root = createRoot(document.getElementById('app'));
  root.render(<Index />);
}
reactComponent();
document.body.appendChild(component());
