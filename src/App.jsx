import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Galeria from './pages/Galeria.jsx'
import Paquetes from './pages/Paquetes.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop';

function App() {


  return (
    // <body className='bg-[#090808]'>
    //   <Router>
    // <Navbar />
    // <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/galeria" element={<Galeria />} />
    // </Routes>
    // <Footer />
    // </Router>
    // </body>
    <div className='bg-[#090808]'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/paquetes" element={<Paquetes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
