
import '../App.css'

function Coincard(props) {

  return (
    <>
<div className='wrapper'>
<div className="main">
      <div className="image">
        <img src={props.img} width={"50px"}></img>
      </div>
      <div className="header">
        <h3>{props.name}</h3>
      </div>
      <div className="price">
        ${props.bitval}
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
        <p>{props.blocks}</p>
        <p>{props.Transaction}</p>
        <p>{props.DayChange}%</p>
          <p>{props.hashrate}</p>
          </div>
      </div>
    </div>

</div>

    
    </>
  );
}

export default Coincard;
