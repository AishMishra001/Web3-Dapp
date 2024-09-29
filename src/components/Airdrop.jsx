import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop(){

  const wallet = useWallet() ; 
  const  {connection} = useConnection()  ; 


  async function sendAirdroptoUser(){
    await connection.requestAirdrop(wallet.publicKey , 1000000000); 
    alert("1 sol Airdrop  sent to your wallet") ; 
  }

   return (
     <div>
         <input type="text" placeholder="Amount" name="" id="" />
         <button onClick={sendAirdroptoUser}>Send Airdrop</button>
         <p>{wallet.publicKey ? wallet.publicKey.toString()  : "No Wallet Connected"}</p>
     </div>
   )
      
}