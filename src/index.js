import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';



import Router from './Router.js';

/* provider is in parent component of redux */
import {Provider} from 'react-redux';
import Store from './redux/store';




 



ReactDOM.render(
                <Provider store={Store}>
                    <Router/>
                </Provider>,
                document.getElementById('root')
               );



