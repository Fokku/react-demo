import React, {StrictMode} from 'react';
import Wallet from './Wallet';

import SendTransaction from './components/SendTransaction';
import RequestAirdrop from './components/RequestAirdrop';
import SignMessage from './components/SignMessage';

function App() {
    return (
      <div className="App">
        <Wallet />
        <RequestAirdrop />
        <SendTransaction />
        <SignMessage />
      </div>
    );
  }

export default App;