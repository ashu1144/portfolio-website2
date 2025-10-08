import React from 'react'
// import video from '../../../public/video1.mp4'
const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="/profileVideo.mp4"></video>



    </div>
  )
}

export default Video