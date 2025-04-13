import React from 'react'

function ImageUpload(props) {

  const showImageHandler = (e)=>{
    const file  =  e.target.files[0];
   if(file){
    props.uploadImageHandler(file)
   }
  
  }

  return (
    <div className='bg-white shadow-2xl rounded-2xl p-4 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg w-full p-6 text-center hover:border-blue-500 transition-all'>
        <input type="file" name="" id="fileInput" className='hidden' onChange={(e)=>{
          showImageHandler(e);
        }}/>
        <p className='text-lg font-medium text-gray-600'>Click and Drag to Upload Image</p>
      </label>
    </div>
  )
}

export default ImageUpload