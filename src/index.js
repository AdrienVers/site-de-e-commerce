import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { UserContextProvider } from './context/userContext';

const GlobalStyle = createGlobalStyle`
    * { font-family: 'Trebuchet MS', Helvetica, sans-serif; }
    body { margin: 0px; padding : 0; }`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
