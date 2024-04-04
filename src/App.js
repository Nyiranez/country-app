import { Footer } from './components/footer';
import { Header } from './components/header';
import { Home } from './home';
import { About } from './about';
import { Contact } from './contact';
import { Error } from './components/pages/error';
import {Routes,Route} from 'react-router-dom'
import './App.css';
// import { Search } from './components/pages/search';
import { Pagination } from './components/pages/pagination';

function App() {
  return (
    <div className='pl-2 pr-2'>
      <div className='container'>
      <Header />
      {/* <Search/> */}
       <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<Error />} />

       </Routes>
       <Pagination/>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
