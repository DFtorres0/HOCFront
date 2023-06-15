import FooterMax from "../templates/FooterMax";
import HeaderMax from "../templates/HeaderMax";
import NavigationMax from "../templates/NavigationMax";
import InputBox from "../templates/Forum";
import "../../../assets/styles/classes/ClassesForumsStyle.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
function Testimonials() {
  const handleInputChange = (value: string) => {
    console.log('Valor de la caja de entrada:', value);
  };
  return (
    <div id="Max" data-testid="testimonials" >
      <NavigationMax/>
      <HeaderMax text={"💬Foros"}/>
      {/* <div>
        <InputBox onInputChange={handleInputChange} />
      </div> */}
      

  <div className="Div"> 
      <Accordion className="Acordion" defaultIndex={[0]} allowMultiple>
    <AccordionItem className="Hola">
    <h2>
      <AccordionButton className="Hola">
        <Box as="span" flex='1' textAlign='left'>
          Titulo del foro 1
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className="Panel">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos. Architecto laboriosam animi excepturi placeat dolorem vel cupiditate error consectetur officia omnis hic nesciunt dolor illum eum, id quidem dignissimos?
      <input type="button" value="Respuesta" className="answer"></input>
    </AccordionPanel>
    <AccordionPanel pb={4} className="Panel">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea officia natus, architecto doloribus, labore dolorem aspernatur reprehenderit mollitia facere eos. Repellat qui dolorem et doloremque alias ab sed eligendi.
      <input type="button" value="Respuesta" className="answer"></input>
    </AccordionPanel>
  </AccordionItem>
  


</Accordion>

</div>

      <FooterMax/>
      
    </div>
  );

}

export default Testimonials;
