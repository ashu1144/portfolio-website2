import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = ({setNavbar}) => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video></Video>
        </div>
        <div className='h-screen w-screen relative overflow-hidden  flex max-sm:flex-col items-center  justify-between'>
            <HomeHeroText></HomeHeroText>
            <HomeBottomText setNavbar={setNavbar}  ></HomeBottomText>
        </div>


    </div>
  )
}

export default Home