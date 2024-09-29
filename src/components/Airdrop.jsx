import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

export function Airdrop(){

  const wallet = useWallet() ; 
  const  {connection} = useConnection()  ; 
  const [ input , setInput ] = useState(0) ; 


  async function sendAirdroptoUser(){
    await connection.requestAirdrop(wallet.publicKey , input*1000000000); 
    alert( `${input} sol Airdrop  sent to your wallet`) ; 
  }

   return (
     <div>
         <input type="text" placeholder="Amount" value= {input} name="" id="" onChange={(e)=>{
              setInput(e.target.value) ; 
         }} />
         <button onClick={sendAirdroptoUser}>Send Airdrop</button>
         <p>{wallet.publicKey ? wallet.publicKey.toString()  : "No Wallet Connected"}</p>
     </div>
   )
      
}