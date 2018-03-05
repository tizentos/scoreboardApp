import {Provider} from 'react-redux';
import {createStore} from 'redux';
import PlayerReducer from './reducers/player';

import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './Container/Scoreboard';
import registerServiceWorker from './registerServiceWorker';


const store=createStore(PlayerReducer,
    window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();