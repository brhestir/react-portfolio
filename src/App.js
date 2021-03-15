import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
				<br/>
        <Container>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
