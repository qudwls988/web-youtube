import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Music from '../components/contents/Music'
import { BookText } from '../data/book'
import { movieText } from '../data/movie'
import { AnimeText } from '../data/anime'
import VideoSlider from '../components/video/VideoSlider'
import Anime from './Anime'


const Home = () => {
  return (
    <Main title="유튜브 채널" description ="유튜브 채널 페이지입니다."> 
          <Today/>
          <Music/>
          <VideoSlider videos={movieText}title='👀추천 영화를 소개합니다' id='movie'/>
          <VideoSlider videos={BookText}title='👀추천 도서를 소개합니다' id='book'/>
          <VideoSlider videos={AnimeText}title='👀추천 애니를 소개합니다' id='anime'/>
          {/* <Anime/> */}
          {/* <Movie/> */}
          {/* <VideoSlider id='book'/>
          <VideoSlider id='anime'/> */}
          {/* <Book/>
          <Anime/> */}
          {/* <Portfolio/>
          <Youtube/> */}

    </Main>
  )
}

export default Home