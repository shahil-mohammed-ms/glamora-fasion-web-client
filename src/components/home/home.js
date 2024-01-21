import TopContent from "./TopContent/top-content";
import "./home.css";
import Content from "./content/Content";
import OfferQuote from "./offer-quote/OfferQuote";
import Title from "./title/Title";
import FeaturedHome from "./featuredProducts/Featured";
import Services from "./serviceHome/Services";

function HomeUser() {
  return (
    <div className="home">
      <TopContent />
      <Content/>
      <OfferQuote/>
      <Title  TitleText={'FEATURED PRODUCTS'}/>
      <div>
      <FeaturedHome/>
     <Services/>
      </div>
      

<div style={{height:'300px',width:'100%'}} >

</div>
    </div>
  );
}

export default HomeUser;
