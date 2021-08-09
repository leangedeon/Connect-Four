import React from "react";
import ReactDom from "react-dom";
import { Dashboard } from "./containers/Dashboard";
import 'bootswatch/dist/journal/bootstrap.min.css';

const App = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fuild">
                <a href="/" className="navbar-brand">
                    Connect Four
                </a>
            </div>
        </nav>
        <main className="bg">
            <div className="container">
                <Dashboard />
            </div>
        </main>
        </>
    )
}

ReactDom.render(<App />, document.getElementById('root'));