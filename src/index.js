import React from "react";
import ReactDom from "react-dom";
import Dashboard from "./components/Dashboard/index";
import {Welcome} from "./components/Welcome/index.jsx";
import 'bootswatch/dist/journal/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import {
    HashRouter, Route, Switch,
  } from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/player">
                        <Dashboard player={1} />
                    </Route>
                    <Route path="/guest">
                        <Dashboard player={2} />
                    </Route>
                    <Route path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </HashRouter>
        </Provider>
    )
}

ReactDom.render(<App />, document.getElementById('root'));
