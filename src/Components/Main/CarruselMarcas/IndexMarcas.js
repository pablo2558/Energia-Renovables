import React from 'react';
import ReactDOM from 'react-dom';
import AppMarcas from './AppMarcas';
import reportWebVitals from './reportWebVitals';
import "./Style.css"

ReactDOM.render(
    <React.StrictMode>
        <AppMarcas/>
    </React.StrictMode>, document.getElementById("root")
);

reportWebVitals();