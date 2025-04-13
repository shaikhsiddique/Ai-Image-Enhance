import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { ImageApi } from './utils/Api'

function Home() {
  const [uploadedImage, setUploadedImage] = useState()
  const [enhancedImage, setEnhancedImage] = useState({})
  const [loading, setLoading] = useState()

  const uploadImageHandler =async  (file)=>{
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedUrl = await ImageApi(file); 
      setEnhancedImage(enhancedUrl)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        
        <ImageUpload uploadImageHandler={uploadImageHandler}/>
        <ImagePreview loading={loading} uploadedImage={uploadedImage} enhancedImage ={enhancedImage}/>
    </>
  )
}

export default Home