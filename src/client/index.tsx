import React from 'react';
import ReactDom from 'react-dom';
import { server } from './server';

import { App } from './App';
import './style.scss';

console.log(server, '<<<');

const node = document.getElementById('appRoot') as HTMLDivElement;

ReactDom.render(<App />, node);
