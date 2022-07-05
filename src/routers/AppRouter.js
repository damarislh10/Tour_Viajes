import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Menu } from "../components/Menu";

function AppRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
