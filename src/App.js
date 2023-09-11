import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [bitval,setBitval]=useState('Loading ...');
  const [blocks,setBlocks]=useState('Loading ...');
  const [Transaction,setTransaction]=useState('Loading ...');
  const [DayChange,setDayChange]=useState('Loading ...');
  const [hashrate,setHashrate]=useState('Loading ...');

  useEffect(()=>{
    async function runthat(){
      fetch("https://api.blockchair.com/bitcoin/stats",{
  method:'GET',
  headers:{
    "Content-Type":"application/json"
  }
}).then((res)=>res.json()).then((data)=>{
  setBitval(data.data.market_price_usd)
  setBlocks(data.data.blocks)
  setTransaction(data.data.transactions)
  setDayChange(data.data.market_price_usd_change_24h_percentage)
setHashrate(data.data.hashrate_24h)

})
    }
    
    runthat()
    console.log(bitval)
  })

  return (
    <>
    <div className="Bitcoin">
      
       
<h1>
  current bitcoin in usd : ${bitval}
</h1>
    </div>
    <div className="main">
      <div className="image">
        <img src="https://loutre.blockchair.io/assets/svg/chains/bitcoin.svg?_nocache=2"></img>
      </div>
      <div className="header">
        <h3>Bitcoin</h3>
      </div>
      <div className="price">
        ${bitval}
      </div>
      <div className="icon-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
</svg>
      </div>
      <div className="bottom">
        <div className="left-content">
          <p>Blocks</p>
          <p>Transactions</p>
          <p>24H Change</p>
          <p>Hashrate</p>
        </div>
        <div className="right-content">
        <p>{blocks}</p>
        <p>{Transaction}</p>
        <p>{DayChange}%</p>
          <p>{hashrate}</p>
          </div>
      </div>
    </div>

    
    </>
  );
}

export default App;
