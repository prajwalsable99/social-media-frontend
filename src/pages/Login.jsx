import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { loginUserAction } from '../store/authActions'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const dispatch=useDispatch();

    const {error,loading,isAuth,user} =useSelector((state)=>state.auth);

    const navigate=useNavigate();
    // useEffect(()=>{
          
    //   if(isAuth){
    //       navigate('/home');
    //   }

    // },[error, loading, isAuth, navigate])


  const [formdata, setFormdata] = useState({

    email: "",
    password: ""
  })

  const handlechange = (e) => {

    setFormdata({ ...formdata, [e.target.name]: e.target.value })


  }

  const handlelogin = (e) => {
    e.preventDefault();
    // console.log(formdata);
    dispatch(loginUserAction(formdata));
    
    // console.log(error,loading,isAuth,user)
  }



  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50 bg-gray-800">
        <div>
         
          <h3 className="text-4xl font-bold text-yellow-600">
            Login
          </h3>

        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handlelogin}>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={handlechange}
                  className="block 
                  bg-gray-200 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              
              <div className="flex flex-col items-start">
                <input
                  required
                  minLength={4}
                  type="password"
                  name="password"
                  value={formdata.password}
                  onChange={handlechange}
                  className="block w-full mt-1  bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className=' text-rose-600  bg-gray-300 text-center'> {error && <p> {error}</p>}</div>
            <div className="flex items-center justify-end mt-4">
              <Link to='/register'
                className="text-sm text-red-600 underline hover:text-gray-900"

              >
                Don't have account ?
              </Link>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
               Login
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Login
