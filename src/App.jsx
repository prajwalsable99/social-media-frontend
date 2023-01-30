
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { isAuthAction } from './store/authActions';
// import { useNavigate } from 'react-router-dom';

function App() {

    const dispatch =useDispatch();
    const {error,loading,isAuth,user}=useSelector((state)=>state.auth);

    useEffect(()=>{
        dispatch(isAuthAction())
    },[dispatch])


  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ isAuth?<Home></Home>:<Login/>}></Route>
          <Route exact path='/register' element={isAuth?<Home></Home>:<Register/>}></Route>
          
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;
