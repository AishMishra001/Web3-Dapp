# Dapp ( Decentralized Application )

- An application that can ask your wallet to debet money and do transaction meaning that it communicates with your wallet

### Wallet 
 - That stores all of your funds 

### Wallet Adaptor 
 - It is a libraries that gives you different function to connect to your  wallet

### Examples of Dapp 

Any application with ask to "connect Wallet" is basically a Dapp as it will communicate with your wallet 

- opensea (dapp on eth)
- magicededn (dapp on solana / eth)
- tensor (dapp in sol)
- jup (swap sol for usdc)

### Examples of non-Dapp 

- Amazon 
- Flipkart 
- twitter 
- facebook 

### Steps to connect to wallet 

In your App component, you are using several context providers from the @solana/wallet-adapter-react and @solana/wallet-adapter-react-ui libraries. These providers are part of the React Context API, which helps to pass down state and functions (related to Solana wallet connections) to components without having to pass them as props explicitly.

Let’s break down the different context providers and their purpose:

#### App.jsx : 


### <ConnectionProvider>
Purpose: This component provides the connection to the Solana network to the rest of the app. It's responsible for allowing any child components to access the connection object, which is an interface for interacting with the Solana cluster (devnet, testnet, or mainnet).
Props:
endpoint: The URL of the Solana network node you are connecting to. In your case, you are connecting to the Solana Devnet via an Alchemy endpoint.
Example usage in your app: When you request an airdrop via connection.requestAirdrop(), the connection is coming from this ConnectionProvider, which manages network interactions for the Solana blockchain.

### <WalletProvider>
Purpose: This provider manages the user's wallet and makes wallet-related state (like the current connected wallet, public key, etc.) available to the rest of the application. It is required for connecting and interacting with a Solana wallet (like Phantom, Sollet, etc.).

Props:

wallets: This prop is where you would normally pass an array of wallet adapters (e.g., Phantom, Sollet). In your case, it’s currently an empty array ([]), but you would typically include wallets here.
autoConnect: Automatically tries to reconnect to the last wallet used when the user revisits the page. If true, the app will attempt to reconnect to the previously connected wallet without needing the user to click "Connect" again.
Example usage in your app: Inside the Airdrop component, when you access the wallet’s public key via useWallet(), the WalletProvider ensures that the wallet’s state (public key, connection status, etc.) is available for use.

### <WalletModalProvider>
Purpose: This provider wraps UI components that allow the user to interact with the wallet connection modal. It is a higher-level wrapper that provides UI states for modals related to wallet connection and disconnection.

Usage:

This is required to provide context for the wallet connection and disconnect modals in your app (like WalletMultiButton and WalletDisconnectButton).
Example usage in your app:

### <WalletMultiButton>:
 This component shows a button that allows users to connect to a wallet. It displays the wallet's name and balance after the wallet is connected.
 
### <WalletDisconnectButton>: 
Displays a button that allows users to disconnect their wallet. After the wallet is connected, this button becomes active for the user to disconnect.