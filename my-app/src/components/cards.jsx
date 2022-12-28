
const Cards = (props) => {
     let badgeText;
     if (props.openSpot === 0 ){
        badgeText = 'Sold Out';
     }else {
        badgeText = 'reserve'
     }
    return (
        <div className="card">

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