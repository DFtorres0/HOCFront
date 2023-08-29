import FooterMax from "../templates/FooterMax";
import HeaderMax from "../templates/HeaderMax";
import NavigationMax from "../templates/NavigationMax";
import Forum from "../templates/Forum";
function Testimonials() {
  const handleInputChange = (value: string) => {
    console.log('Valor de la caja de entrada:', value);
  };
  return (
    <div style={{display:"flex",flexDirection:"column"}} data-testid="testimonials" >
      <NavigationMax/>
      <HeaderMax text={"💬Foros"}/>
      <Forum isLesson ={false}/>
      <FooterMax/>
      
    </div>
  );

}

export default Testimonials;
