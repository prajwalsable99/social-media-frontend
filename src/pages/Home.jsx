import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';
import Suggestions from '../components/Suggestions';
import { LogoutAction } from '../store/authActions';

const Home = () => {
  const dispatch =useDispatch();
  const handlelogout=()=>{
      dispatch(LogoutAction())

  }
  return (
 <div>
  <div className='h-screen grid grid-cols-8'>
    <div className='col-span-1 bg-gray-400'>
      <Navbar></Navbar>
    </div>
    <div className='col-span-5 bg-black'>
      <Posts></Posts>
    </div>
    <div className='col-span-2 bg-gray-300'>
      <Suggestions></Suggestions>
    </div>
  </div>
 </div>
  )
}

export default Home
