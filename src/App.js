import { useEffect, useState } from "react";
import './App.css'

import './style.css'
import Coincard from "./components/Coincard";

function App() {
  const [bitval,setBitval]=useState([]);
  
const ccurrency=["bitcoin","ethereum","litecoin","dogecoin","monero","solana","stellar","cardano"]
  useEffect(()=>{
    async function runbit(){
     const bit=await fetch("https://api.blockchair.com/stats?key=G___weGsED5eAZXpBSxl7X3Zn42bwlEn",{
  method:'GET',
  headers:{
    "Content-Type":"application/json"
  }
})

const data=await bit.json()
setBitval(data.data)
console.log(data.data)

}

runbit()



},[])

console.log()
  return (
    <>
    <div className="Bitcoin">
      
       
<center>
<h1>
  Blockchain Data
  </h1>
</center>
    </div>
   
   <div className="container">
    {bitval.ethereum.data.market_price_usd}
 
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/bitcoin.svg?_nocache=2"}  name={"Bitcoin"} bitval={bitval.bitcoin.data.market_price_usd} blocks={bitval.bitcoin.data.blocks}  Transaction={bitval.bitcoin.data.transactions} DayChange={bitval.bitcoin.data.market_price_usd_change_24h_percentage} hashrate={bitval.bitcoin.data.hashrate_24h}/>
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/etherium.svg?_nocache=2"}  name={"Bitcoin"} bitval={bitval.ethereum.data.market_price_usd} blocks={bitval.ethereum.data.blocks}  Transaction={bitval.ethereum.data.transactions} DayChange={bitval.ethereum.data.market_price_usd_change_24h_percentage} hashrate={bitval.ethereum.data.hashrate_24h}/>
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/dogecoin.svg?_nocache=2"}  name={"Bitcoin"} bitval={bitval.dogecoin.data.market_price_usd} blocks={bitval.dogecoin.data.blocks}  Transaction={bitval.dogecoin.data.transactions} DayChange={bitval.dogecoin.data.market_price_usd_change_24h_percentage} hashrate={bitval.dogecoin.data.hashrate_24h}/>
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/litecoin.svg?_nocache=2"}  name={"Bitcoin"} bitval={bitval.litecoin.data.market_price_usd} blocks={bitval.litecoin.data.blocks}  Transaction={bitval.litecoin.data.transactions} DayChange={bitval.litecoin.data.market_price_usd_change_24h_percentage} hashrate={bitval.litecoin.data.hashrate_24h}/>
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/monero.svg?_nocache=2"}  name={"Bitcoin"} bitval={bitval.monero.data.market_price_usd} blocks={bitval.monero.data.blocks}  Transaction={bitval.monero.data.transactions} DayChange={bitval.monero.data.market_price_usd_change_24h_percentage} hashrate={bitval.monero.data.hashrate_24h}/>
 



   </div>
   

    
    </>
  );
}

export default App;
