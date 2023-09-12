import { useEffect, useState } from "react";
import './App.css'

import './style.css'
import Coincard from "./components/Coincard";

function App() {
  const [bitval,setBitval]=useState([]);
  const [dogecoin,setDogecoin]=useState([]);
  const [Transaction,setTransaction]=useState([]);
  const [DayChange,setDayChange]=useState([]);
  const [hashrate,setHashrate]=useState([]);

  useEffect(()=>{
    async function runbit(){
     const bit=await fetch("https://api.blockchair.com/bitcoin/stats",{
  method:'GET',
  headers:{
    "Content-Type":"application/json"
  }
})

const data=await bit.json(bit)
setBitval(data.data)
console.log(data.data)

    }
    
    runbit()

    async function rundoge(){
      const doge=await fetch("https://api.blockchair.com/dogecoin/stats",{
   method:'GET',
   headers:{
     "Content-Type":"application/json"
   }
 })
 
 const data=await doge.json(doge)
 setDogecoin(data.data)
 console.log(data.data)
 
     }
     
     rundoge()
    
  },[])

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
   
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/bitcoin.svg?_nocache=2"} name={"Bitcoin"} bitval={bitval.market_price_usd} blocks={bitval.blocks}  Transaction={bitval.transactions} DayChange={bitval.market_price_usd_change_24h_percentage} hashrate={bitval.hashrate_24h}/>
 
   <Coincard img={"https://loutre.blockchair.io/assets/svg/chains/dogecoin.svg"} name={"Dogecoin"} bitval={dogecoin.market_price_usd} blocks={dogecoin.blocks}  Transaction={dogecoin.transactions} DayChange={dogecoin.market_price_usd_change_24h_percentage} hashrate={dogecoin.hashrate_24h}/>
 
   
   </div>
   

    
    </>
  );
}

export default App;
