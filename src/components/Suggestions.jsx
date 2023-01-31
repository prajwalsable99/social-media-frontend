import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dp from '../assets/images/sample_user_dp.jpeg'
const Suggestions = () => {
  const curr_user = useSelector((state) => state.auth.user);
  return (

    <div className="h-screen flex  justify-center bg-white  ">
      <div className="flex w-full max-w-xs p-3 bg-white">
        <ul className="flex flex-col w-full">
          <header class="flex items-center mb-4 py-8 px-6">
            <img class="rounded-full w-20 h-20 ring-4 ring-opacity-20 ring-gray-200" src={curr_user.avatar.url} alt="Dr. Jessica James" />
            <div class="ml-5">
              <h1 class="text-black tracking-wide text-lg">{curr_user.name}</h1>
              {/* <p class="text-gray-300 tracking-wider text-sm">Dermathologist</p> */}
            </div>
          </header>
            <h1 className='mb-3'>Suggestions for you</h1>
          <div className='overflow-y-scroll no-scrollbar'>
            {/* links */}
            {
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((suggestion, index) => (

                <li className="my-px my-1" key={index}>
                  <Link to="/"
                    className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
                    <span className="flex items-center justify-center ">
                      <img className="h-12 w-12 rounded-full border-black border-solid border-1" src={dp} alt='img' />
                    </span>

                    <span className="ml-3 ">{"Instagram User"}</span>
                  </Link>
                </li>

              ))
            }
          </div>





        </ul>
      </div>
    </div>
  )


}

export default Suggestions
