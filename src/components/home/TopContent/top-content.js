import Header from "../../layouts/header/header";
import MainBanner from "../banners/mainBanner/main-banner";
import './TopContent.css'

function TopContent() {
  return (
    <div
      className="TopContent"
      style={{
        backgroundImage: `url('/assets/main-banner-images/boxed-water-is-better-n1pULBOO24M-unsplash.jpg')`,
      }}
    >
      <Header />
      <MainBanner />
    </div>
  );
}

export default TopContent;
