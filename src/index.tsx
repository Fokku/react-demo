import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import ContextProvider from "./components/ContextProvider";

// Use require instead of import, and order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('./index.css');

ReactDOM.render(
    <StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </StrictMode>,
    document.getElementById('root')
);

