import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Coindetails from './Component/CoinDetails/Coindetails';
import Coins from './Component/Coins/Coins';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Homepage from './Component/Homepage/Homepage';
import BdAdress from './Component/Contact/BdAdress'
import UsAdress from './Component/Contact/UsAdress'
import NotFound from './Component/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes className='bg-slate-100'>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAdress></BdAdress>}></Route>
          <Route path='us-address' element={<UsAdress></UsAdress>}></Route>
        </Route>
        <Route path='/coin-details/:id' element={<Coindetails></Coindetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
