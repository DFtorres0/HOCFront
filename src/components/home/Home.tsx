import HomeNavigation from "./HomeNavigation";
import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout";
import HomePortfolio from "./HomePortfolio";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

function Home() {

  return (
    <div data-testid="home" >
      <HomeNavigation/>
      <HomeHeader/>
      <HomeAbout/>
      <HomePortfolio/>
      <HomeContact/>
      <HomeFooter/>
    </div>
  );
}

export default Home;



