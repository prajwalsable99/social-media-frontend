import React from 'react'
import { LogoutAction } from '../store/authActions';
import { useDispatch, useSelector } from 'react-redux';
import logo  from '../assets/images/logo.png' 
import {Link} from 'react-router-dom'
import {AiFillHome,AiOutlineSearch,AiOutlineMessage,AiOutlineHeart,AiOutlinePlusCircle} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {CgPlayButtonR} from 'react-icons/cg'
import {GrLogout} from 'react-icons/gr'

const Navbar2 = () => {

    const curr_user =useSelector((state)=>state.auth.user);



    const dispatch =useDispatch();
  const handlelogout=()=>{
      dispatch(LogoutAction())

  }
  return (

<div className="h-screen flex   bg-white ">
		<div className="flex w-full max-w-xs p-3 bg-white">
			<ul className="flex flex-col w-full">
				<li className="my-px">
					<img src={logo}
					   className="flex flex-row items-center h-12 px-4 rounded-lg pt-4" alt='img'>
					
					</img>
				</li>

                {/* links */}
				
				<li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<AiFillHome size={28}/>
						</span>
						<span className="ml-3 ">Home</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<AiOutlineSearch size={28}/>
						</span>
						<span className="ml-3 ">Search</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<MdOutlineExplore size={28}/>
						</span>
						<span className="ml-3 ">Explore</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<CgPlayButtonR size={22} className='mx-1'/>
						</span>
						<span className="ml-3 ">Reels</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<AiOutlineMessage size={28}/>
						</span>
						<span className="ml-3 ">Messages</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<AiOutlineHeart size={28}/>
						</span>
						<span className="ml-3 ">Notifications</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<AiOutlinePlusCircle size={28}/>
						</span>
						<span className="ml-3 ">Create</span>
					</Link>
				</li>

                <li className="my-px">
					<Link to="/"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
                        <img className="h-8 w-8 rounded-full border-black border-solid border-1" src={curr_user.avatar.url} alt='img' />
						</span>
						<span className="ml-3 ">Profile</span>
					</Link>
				</li>
                <li className="my-px">
					<button onClick={handlelogout}
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-black hover:bg-gray-300">
						<span className="flex items-center justify-center ">
							<GrLogout size={28}/>
						</span>
						<span className="ml-3 ">Logout</span>
					</button>
				</li>
                

				
			</ul>
		</div>
	</div>
    )
}

export default Navbar2
