import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuyItem } from "../components/BuyItem";
import { Detail } from "../components/Detail";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";
import { ShoppingCart } from "../components/ShoppingCart";
import { ToursContainer } from "../containers/ToursContainer";

function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ToursContainer />} />
        <Route path="/article/:id" element={<Detail />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/compra" element={<BuyItem />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
