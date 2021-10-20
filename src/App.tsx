import React, {StrictMode} from 'react';
import Wallet from './Wallet';

import SendTransaction from './components/SendTransaction';
import RequestAirdrop from './components/RequestAirdrop';
import SignMessage from './components/SignMessage';
import SendSPL from './components/SendSPL';
import TakeSPL from './components/TakeSPL';

function App() {
    return (
      <div className="App" >
        <Wallet />
        <RequestAirdrop />
        <SendTransaction />
        <SendSPL />
        <TakeSPL />
        <SignMessage />
        <h1>Note: There is only 1 SPL token that can be taken and transferred</h1>
      </div>
    );
  }

export default App;