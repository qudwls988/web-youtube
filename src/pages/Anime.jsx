import React from 'react'
import Main from '../components/section/Main'
import { AnimeText } from '../data/anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <Main title="애니메이션 채널" description="애니메이션 페이지입니다.">
      <section id='anime'>
              <h2>😜추천 애니를 소개합니다.</h2>
              <div className='video__inner'>
                {AnimeText.map((anime, key)=>(
                  <div className="video" key={key}>
                    <div className="video__thumb play__icon">
                      <Link to={`/anime/${anime.videoId}`}>
                          <img src={anime.img} alt={anime.title}/>
                      </Link>
                    </div>
                    </div>
        
                ))}
              </div>
        </section>
    </Main>
  )
}

export default Anime
