
import './App.css'
import Conteiner from './components/__organism/Containr/Conteiner'
import pizza from "./assets/images/Pizza Photo.png"
import tortelin from "./assets/images/Tortellini Photo.jpg"
import cake from "./assets/images/Strawberry cake Photo.png"
import hoticone from "./assets/images/Hot Icon.png"
import organicicone from "./assets/images/Organic Icon.png"
import wheaticone from "./assets/images/Wheat Icon.png"


function App() {
  

  return (
    <>
      <Conteiner  photo ={pizza} text="Pepperoni Pizza" hoticone={hoticone} wheaticone={wheaticone} Paragraphtext="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust." cal="265 Cal" pharengate="P/F/C: 12/10/31" celsuse="53.8 °C" newprice="$23.90" oldprice="$29.90"/>
      <Conteiner  photo={tortelin} text="Tortellini" organicicone={organicicone} hoticone={hoticone} wheaticone={wheaticone} Paragraphtext="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce." cal="270 Cal" pharengate="P/F/C: 18/4/41" celsuse="42.4 °C" newprice="$17.90" oldprice="$22.90"/>
      <Conteiner photo={cake} text="Strawberry Cake"  wheaticone={wheaticone} Paragraphtext="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer." cal="346 Cal" pharengate="P/F/C: 6/14/49" celsuse="13.9 °C" newprice="$13.90" oldprice="$18.90"/>
     

    </>
  )
}

export default App
