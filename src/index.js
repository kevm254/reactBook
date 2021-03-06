import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import List from './pages/List';

import Detail from './pages/Detail';

ReactDOM.render(
    <Router history={createHistory({ queryKey: false })} onUpdate={() => window.scrollTo(0,0)}>
        <Route path="/" component={ List } />
        <Route path="/react" component={ Detail } />
    </Router>,
    document.getElementById('app')
);