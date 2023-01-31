import React from 'react'
// import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Navbar2 from '../components/Navbar2';
import Posts from '../components/Posts';
import Suggestions from '../components/Suggestions';
import { getpostsfollAction } from '../store/getPostsofFollwing/getpostoffollActions';


const Home = () => {
  const dispatch =useDispatch();
  useEffect( ()=>{
    

    dispatch(getpostsfollAction())
  } ,[dispatch])
 
  return (
 <div>
  
  <div className='h-screen grid grid-cols-12'>
  <div className='col-span-2 bg-white '>
      <Navbar2></Navbar2>
    </div>
    <div className='col-span-6 bg-white justify-center flex border-solid border-2 '>
      <Posts></Posts>
    </div>
    <div className='col-span-4 bg-white'>
      <Suggestions></Suggestions>
    </div>
  </div>
 </div>
  )
}

export default Home
