import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Carasol from './components/Carasol';
import Offers from './components/Offers';
import {Heading} from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './pages/HotAccessoriesMenu';
import {Routes,Route} from "react-router-dom"
import HotAccessories from './pages/HotAccessories';
import data from "./data/data.json"
import ProductReview from './pages/ProductReview';
import Video from './pages/Video';
import Footer from './pages/Footer';
import LastFooter from './pages/LastFooter';
import NavOption from './components/NavOption';


function App() {
  return (
    <div className="App">

      <PreNavbar/>
      <Navbar/>
      <NavOption data={data}/>

      <Carasol start={data.banner.start}/>
      <Offers/>
      <Heading name="STAR PRODUCTS"/>
      <StarProduct/>
      <Heading name="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
  

      <Routes>
        <Route exact path="/music" element={<HotAccessories cards={data.hotAccessories.music} cover={data.hotAccessoriesCover.music} />}/>

        <Route exact path="/smartDevice" element={<HotAccessories cards={data.hotAccessories.smartDevice} cover={data.hotAccessoriesCover.smartDevice} />}/>

        <Route exact path="/home" element={<HotAccessories cards={data.hotAccessories.home} cover={data.hotAccessoriesCover.home} />}/>

        <Route exact path="/lifestyle" element={<HotAccessories cards={data.hotAccessories.lifeStyle} cover={data.hotAccessoriesCover.lifeStyle} />}/>

      </Routes>

      <Heading name="PRODUCT REVIEWS"/>
      <ProductReview/>
      <Heading name="PEOPLE CHOICE"/>
      <Video videos={data.videos}/>
      <Heading name="IN THE PRESS"/>

      <Carasol start={data.banner.endd} end={data.banner.end}/>

      <Footer/>
      <LastFooter footer={data.footer}/>

    </div>
  );
}

export default App;
