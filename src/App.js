import { Footer } from './components/footer';
import { Header } from './components/header';
import{HeadB} from './components/pages/home'
import {Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='pl-2 pr-2'>
      <div className='container'>
      <Header />
       <Routes>
       <Route path="/" element={<HeadB />} />
       </Routes>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
