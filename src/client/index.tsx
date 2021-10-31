import React from 'react';
import ReactDom from 'react-dom';

import { App } from './App';

const node = document.getElementById('appRoot') as HTMLDivElement;
console.log(node, '<<<<<<<<<');

ReactDom.render(<App />, node);
