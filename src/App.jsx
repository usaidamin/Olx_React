import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Bike1 from "./images/Bike1.jpeg"
import Bike2 from "./images/Bike2.jpeg"
import Bike3 from "./images/Bike3.jpeg"
import Bike4 from "./images/Bike4.jpeg"
import Car1 from "./images/Car1.jpeg"
import Car2 from "./images/Car2.jpeg"
import Car3 from "./images/Car3.jpeg"
import Car4 from "./images/Car4.jpeg"
import Mob1 from "./images/Mob1.jpeg"
import Mob2 from "./images/Mob2.jpeg"
import Mob3 from "./images/Mob3.jpeg"
import Mob4 from "./images/Mob4.jpeg"
import Plot1 from "./images/Plot1.jpeg"
import Plot2 from "./images/PLot2.jpeg"
import Plot3 from "./images/Plot3.jpeg"
import Plot4 from "./images/Plot4.jpeg"

const App = () => {

  return (
    <>
    <Header />
    <Body bike1={Bike1} bike2={Bike2} bike3={Bike3} bike4={Bike4}
    car1={Car1} car2={Car2} car3={Car3} car4={Car4}
    mob1={Mob1} mob2={Mob2} mob3={Mob3} mob4={Mob4}
    plot1={Plot1} plot2={Plot2} plot3={Plot3} plot4={Plot4} />
    <Footer />
    </>
  )
}

export default App
