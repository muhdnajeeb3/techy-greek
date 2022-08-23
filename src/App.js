import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Form from './componentss/Form';
import Home from './componentss/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route  path='/form' element={<Form/>} />

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
