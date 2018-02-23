import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';
import {PLAYERS} from './App';

ReactDOM.render(<App initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
