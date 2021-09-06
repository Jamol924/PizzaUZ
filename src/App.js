import React from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './component/Feature';
import Footer from './component/Footer/indeh';
import Hero from './component/Hero';
import Products from './component/Products';
import { productsData,  productsDataTu } from './component/Products/data';
import { GlobalStyle } from './globalStyle';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='choose your favorite' data={productsData}/>
      <Feature/>
      <Products heading='Sweet Treats for You' data={productsDataTu}/>
      <Footer/>
    </Router>
  );
}

export default App;
