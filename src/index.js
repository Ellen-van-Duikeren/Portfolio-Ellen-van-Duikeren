import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import ContextProvider from "./context/AnimationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </Router>
    </React.StrictMode>
);


