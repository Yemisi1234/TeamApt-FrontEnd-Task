import './App.css';
import { Header } from './components/Header.js/Header';
import { Homepage } from './components/Home/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
    
  );
}

export default App;
