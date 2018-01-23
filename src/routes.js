import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import MainPage from './components/main/MainPage';
import ArticlePage from './components/article/ArticlePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="article/:id" component={ArticlePage} />
    </Route>

);