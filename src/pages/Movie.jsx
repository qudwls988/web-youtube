import React from 'react'
import Main from '../components/section/Main'

import { movieText } from '../data/movie'
import VideoCard from '../components/video/VideoCard'


const Moive = () => {
  return (
    <Main title="영화채널" 
          description="영화 페이지입니다.">
      <section id='moviePage'>
        <h2>😆추천영화 페이지.</h2>
              <div className='video__inner'>
                  <VideoCard videos={movieText}/>
              
              </div>
      </section>
    </Main>
  )
}

export default Moive