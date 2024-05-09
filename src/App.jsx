import { Outlet } from 'react-router-dom';
import './App.css';
import Header1 from './Components/Navbar1/Header1';
import Header2 from './Components/Navbar2/Header2';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
  <ShopContextProvider>
    <div className=''>
      <div >
       <Header1/>
      </div>
      <div className=''>
        <Header2/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  </ShopContextProvider>
  );
}

export default App;
