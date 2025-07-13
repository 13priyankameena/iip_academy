import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Courses from './Courses';
import Contact from './Contact';
import Gallary from './Gallary';
import Enquiry from './Enquiry';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
