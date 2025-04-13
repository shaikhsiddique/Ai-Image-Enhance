import React from 'react'
import Home from './Components/Home'


function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-screen py-8 px-4 bg-gray-100'>
      <div>
        <h1 className='text-center mb-5 text-5xl font-bold text-gray-800'>AI Image Enhancer</h1>
        <p className='text-center text-lg text-gray-500'>Upload your image to enhance it.</p>
      </div>
      <Home/>
      <div className='text-lg text-gray-500 mt-6'>
      <footer className='mt-10 text-center text-gray-600 '>
        <p>&copy; 2025 AI Image Enhancer. All rights reserved.</p>
      </footer>
      </div>
    </div>
  )
}

export default App