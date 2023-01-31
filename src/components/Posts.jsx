import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getpostsfollAction } from '../store/getPostsofFollwing/getpostoffollActions';
import Loader from './Loader';
import Post from './Post';

const Posts = () => {
 

  const {loading,success,error,posts}=useSelector((state)=>state.getposts);



 
 
  return (

    <div className='text-black bg-white h-screen overflow-y-scroll no-scrollbar'>
      {error? (<p>{error}</p>):
      
        loading?(<Loader/>):(
          !posts&&posts.length<1 ? <p>No posts yet</p> :(

            posts.map(
              (post,index)=>(<Post key={post._id} postdata={post}></Post> )
            )
          )
  
        )
      }
    
    </div>
  )
}

export default Posts
