import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import DeliveredCategories from './DeliveredCategories';
import RegularMenu from './RegularMenu';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <DeliveredCategories/>
      <RegularMenu/>
      <Footer/>
    </div>
  );
}

export default App;