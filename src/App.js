import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import { Error } from './components/pages/error';
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='pl-2 pr-2'>
      <div className='container'>
      <Header />
       <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<Error />} />

       </Routes>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
