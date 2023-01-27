
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;
