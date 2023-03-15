import "../../assets/styles/home/homeStyle.css";
import Navigation from "./NavigationHome";
import Header from "./HeaderHome";
import About from "./AboutHome";
import Portfolio from "./HomePortfolio";
import Contact from "./ContactHome";
import Footer from "./FooterHome";

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
