import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './nav/Nav';
import Bannar from './bannar/Bannar';
import Collections from "./Collections/Collections";
import Products from "./products/Products";
import Popular from "./Popular/Popular";
import Footer from "./footer/Footer";
function App() {
  return (
    <Fragment>
      <Nav />
      <Bannar />
      <Collections />
      <Products />
      <Popular />
      <Footer />
    </Fragment>
  );
}

export default App;
