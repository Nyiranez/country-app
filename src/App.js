import { Footer } from './components/footer';
import { Header } from './components/header';

import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='pl-2 pr-2'>
      <div className='container'>
      <Header />
       <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       </Routes>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
