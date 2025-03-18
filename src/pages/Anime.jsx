import React from 'react'
import Main from '../components/section/Main'
import { AnimeText } from '../data/anime'
import VideoCard from '../components/video/VideoCard'

const Anime = () => {
  return (
    <Main title="애니메이션 채널" 
          description="애니메이션 페이지입니다.">
      <section id='anime'>
              <h2>😜추천 애니를 소개합니다.</h2>
              <div className='video__inner'>
                  <VideoCard videos={AnimeText}/>

              </div>
        </section>
    </Main>
  )
}

export default Anime
