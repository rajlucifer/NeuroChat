import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

export const RightSideBar = ({selectedUser}) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full overflow-y-scroll ${selectedUser ? "max-md:hidden":""}`}>
      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto '>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt='' className='w-20 aspect-[1/1 ] rounded-full'></img>
        <h1 className='px-10 text-xl  font-medium  mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser?.fullName}
        </h1>
        <p>{selectedUser?.bio}</p>
         
      </div>
      <hr className='my-4 border-gray-500'/>
      <div className='px-5 text-xs'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
          {imagesDummyData.map((url,index)=>(
            <div key={index} onClick={()=>window.open(url)}>
              <img src={url} className='h-full rounded-md'></img>
            </div>
          ))}

        </div>

      </div>
      <button className='w-[220px] h-[40px]  ml-5  absolute bottom-4  border border-white  rounded-xl bg-gradient-to-r from-purple-400 to-violet-600 cursor-pointer'>
        Logout
      </button>
 
    </div>
  )
}
