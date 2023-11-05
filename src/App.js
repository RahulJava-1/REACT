import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';

function App() {

 


  return (
    <>
    <Router>
    <Header title ="My Todo List" loginRequired={false}/>
    
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    
    <Footer />
    </Router>
    </>
  );
}

export default App;
