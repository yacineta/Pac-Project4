// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Hero from './Components/Heroo/Hero';
import Service from './Components/Servicee/Service';
import Distination from './Components/Distinationn/Distination';
import Testimonials from './Components/Testimonialsee/Testimonials';
import Footer from './Components/Footer/Footer';
import Regestr from './Components/Regestri/Regestr';

function App() {
  return (
    <div className="App">
     
      {/* <Navbar /> */}
      <Product />
      <Hero />
      <Service/>
      <Distination />
      <Testimonials />
      <Footer />
      <Regestr />
      
    </div>
  );
}

export default App;
