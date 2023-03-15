import Navigation from "./HomeNavigation";
import Header from "./HomeHeader";
import About from "./HomeAbout";
import Portfolio from "./HomePortfolio";
import Contact from "./HomeContact";
import Footer from "./HomeFooter";

function Home() {

  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
