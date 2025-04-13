import React from 'react'
import Loading from './Loading'

function ImagePreview(props) {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      <div className='bg-white rounded-xl overflow-hidden shadow-2xl'>
        <h2 className='text-lg font-semibold text-center bg-gray-800 text-white p-2'>Uploaded Images</h2>
       {props.uploadedImage ? <img src={props.uploadedImage} alt=""  className='w-full h-full object-cover object-center'/> :<div className='flex items-center justify-center bg-gray-200 h-80'>
          No Image Selected
        </div>}
        
      </div>

      <div className='bg-white rounded-xl overflow-hidden shadow-2xl'>
        <h2 className='text-lg font-semibold text-center bg-blue-800 text-white p-2'>Enhanced Images</h2>
        {props.loading ? <Loading/> : (props.enhancedImage ? <img src={props.enhancedImage.image} alt=""  className='w-full h-full object-cover object-center'/>: <div className='flex items-center justify-center bg-gray-200 h-80'>
          No Image Enhanced
        </div>)}
       
      </div>
    
    </div>
  )
}

export default ImagePreview