import { join } from 'lodash-es';

export default function printMe() {
  console.log(join(['another-module', 'I get called from print.js!']));
}
