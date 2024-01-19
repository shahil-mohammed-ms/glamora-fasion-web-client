import TopContent from "./TopContent/top-content";
import "./home.css";
import Content from "./content/Content";

function HomeUser() {
  return (
    <div className="home">
      <TopContent />
      <Content/>
    </div>
  );
}

export default HomeUser;
