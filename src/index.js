import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
//import '.styles/styles.css'; // webpack can import them as well
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // provider pass down store to components
import {loadArticleList} from './actions/articleActions';

debugger;

const store = configureStore(); // new instance of the stroe
store.dispatch(loadArticleList()); // we dispatch action to get data
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);