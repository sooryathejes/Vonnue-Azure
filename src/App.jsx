import './App.css';
// import Header from './components/Header';
import Header2 from './components/Header2';
import Mainpage from './components/Mainpage';
import Products from './components/Products';
import Secondpage from './components/Secondpage';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Resources from './components/Resources';
import Customer from './components/Customer';
import NextStep from './components/Nextstep';
import Footer from './components/Footer';
import Socialmedia from './components/Socialmedia';
import Header from './components/Header';
import Global from './components/Global';

function App() {
  return (
    <div>
         <Header/>
         <Mainpage/>
         <Header2></Header2>
         <Secondpage></Secondpage>
         <Solutions/>
         <Products/>
         <Services/>
         <Resources/>
         <Global/>
         <Customer/>
         <NextStep/>
         <Socialmedia/>
         <Footer/>
   </div>
  );
}

export default App;
