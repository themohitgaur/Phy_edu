import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import Navbar from './shared/navbar';
import Footer from './shared/footer';
function App() {
  return (
    <div className="App">
       <Navbar/>
     <Input/>
     <Footer/>
    </div>
  );
}

export default App;
