import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FiSend ,FiMoreHorizontal} from 'react-icons/fi'
import { VscComment, VscSave } from 'react-icons/vsc'
const Post = (props) => {
  const [isLiked, setLiked] = useState(true);

  const { image, caption, owner } = props.postdata;
  return (
    <div className="bg-white p-4 ">
      <div className="bg-white border rounded-sm max-w-md">
        <div className='justify-between flex'>

          <div className="flex items-center px-4 py-3">
            <img className="h-8 w-8 rounded-full" src={owner.avatar.url} alt='img' />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight">{owner.name}</span>
              {/* <span className="text-gray-600 text-xs block">Asheville, North Carolina</span> */}
            </div>
          </div>

          <FiMoreHorizontal size={15} className="m-4 "/>
        </div>
        <img src={image.url} alt='img' />
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5 ">

            <button onClick={() => { setLiked(!isLiked) }}>
              {isLiked ?

                <AiFillHeart size={28} fill={'red'}></AiFillHeart> :
                <AiOutlineHeart size={28}></AiOutlineHeart>
              }
            </button>

            <VscComment size={28} />
            <FiSend size={24} />


          </div>
          <div className="flex">
            <VscSave size={24} />
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
      </div>
    </div>
  )
}

export default Post
