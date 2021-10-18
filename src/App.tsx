import React, {StrictMode} from 'react';
import Wallet from './Wallet';

import SendTransaction from './components/SendTransaction';
import RequestAirdrop from './components/RequestAirdrop';

function App() {
    return (
      <div className="App">
        <Wallet />
        <RequestAirdrop />
        <SendTransaction />
      </div>
    );
  }

export default App;