import { join } from 'lodash-es';

function component() {
  const element = document.createElement('h1');

  element.innerHTML = join(['Hello', 'Webpack'], ' ');

  return element;
}

document.body.appendChild(component());
