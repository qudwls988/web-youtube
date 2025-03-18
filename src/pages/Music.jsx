import React from 'react'
import Main from '../components/section/Main'
import { musicText } from '../data/music'
import VideoCard from '../components/video/VideoCard'

const Music = () => {
  return (
    <Main title="음악 채널"
          description="음악 추천 페이지입니다.">
        
          <section id='music'>
            <h2>😎 추천 음악을 소개합니다.</h2>
                  <div className='music__inner'>
                  <VideoCard videos={musicText}/>
                  </div>
          </section>
    </Main>
  )
}

export default Music