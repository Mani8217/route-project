import Collection from "../components/collection";
import cardData from "../cardData";

import Cards from '../components/cards';

const Home = (props) => {
 const myCards = cardData.map((item) => {
    return (
        <Cards 
          img = {item.coverImg}
          title = {item.title}
          text ={item.text}

        
        />
    )
 })
    return (
        <div>
        <Collection />
        <div className="container card-box">
        {myCards}
        </div>
        </div>

    )
}
export default Home;