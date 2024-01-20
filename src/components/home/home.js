import TopContent from "./TopContent/top-content";
import "./home.css";
import Content from "./content/Content";
import OfferQuote from "./offer-quote/OfferQuote";

function HomeUser() {
  return (
    <div className="home">
      <TopContent />
      <Content/>
      <OfferQuote/>
<div style={{height:'300px',width:'100%'}} >

</div>
    </div>
  );
}

export default HomeUser;
