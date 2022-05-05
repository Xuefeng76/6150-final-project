import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import Search from './compoments/Search';
import Demo1 from './compoments/demo1';
import Demo3 from './compoments/demo3';
import CarouselP from './compoments/CarouselP';
import FlexBox from './compoments/FlexBox';
import Footer from './compoments/Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Rent from './compoments/Rent';
import Sell from './compoments/Sell';
import Buy from './compoments/Buy';
import LogIn from './compoments/LogIn';
import LogOrSign from './compoments/LogOrSign';
import NewAccount from './compoments/NewAccount';
import HomeInfo from './compoments/HomeInfo';
function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
      
      <Route index element={<><Search/> <FlexBox/><Footer/></> } />
        <Route path="Rent" element={<Rent/>} />
        <Route path="HomeInfo" element={<HomeInfo/>} />
        
        <Route path="Sell" element={<Sell/>} />
        <Route path="Buy" element={<Buy/>} />
        <Route path="LogOrSign" element={<LogOrSign/>}>
           <Route index element={<LogIn />} />
          <Route path="LogIn" element={<LogIn/>} />
          <Route path="NewAccount" element={<NewAccount/>} />
        </Route>
        
        
      </Routes>
      {/* <Search/> */}
      {/* <CarouselP/> */}
      {/* <FlexBox/> */}
      {/* <div>
         
      </div> */}
     
    </div>
  );
}

export default App;
