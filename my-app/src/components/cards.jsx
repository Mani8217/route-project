
const Cards = (props) => {
     let badgeText;
     if (props.openspots === 0 ){
        badgeText = 'Sold Out';
     }else {
        badgeText = 'Reserve';
     }
    return (
        <div className="card">
         {badgeText && <div class="badge bg-danger">{badgeText}</div>} 
         <img src={props.img} className="card-img-top" alt="..." />
         <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <p className="card-text">{props.text}</p>
         <a href="#" className="btn btn-primary">Payment!</a>
  </div>
</div>
    )
}
export default Cards;
