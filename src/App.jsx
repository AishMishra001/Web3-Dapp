import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { Airdrop } from './components/Airdrop';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/nddfDr3rXrtWsgsjtnzAjroHyvsQHUE4"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton/>
          <WalletDisconnectButton/>
            <div>
              hi 
            </div>
            <Airdrop />
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
