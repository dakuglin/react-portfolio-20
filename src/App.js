import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
