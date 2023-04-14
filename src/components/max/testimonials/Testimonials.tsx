import FooterMax from "../templates/FooterMax";
import HeaderMax from "../templates/HeaderMax";
import NavigationMax from "../templates/NavigationMax";

function Testimonials() {

  return (
    <div id="Max" data-testid="testimonials" >
      <NavigationMax/>
      <HeaderMax text={"💬Foros"}/>
      <FooterMax/>
    </div>
  );
}

export default Testimonials;
