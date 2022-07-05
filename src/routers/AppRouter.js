import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "../components/Detail";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";

function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
