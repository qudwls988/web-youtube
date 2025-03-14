import React from 'react'
import Main from '../components/section/Main'
import { movieText } from '../data/movie'
import { Link } from 'react-router-dom'

const Moive = () => {
  return (
    <Main title="영화채널"
        description="영화 페이지입니다.">

          <section id='movie'>
            <h2>😆추천 영화를 소개합니다.</h2>
                  <div className='video__inner'>
                    {movieText.map((video, key)=>(
                      <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                          <Link to={`/video/${video.videoId}`}>
                              <img src={video.img} alt={video.title}/>
                          </Link>
                        </div>
                        </div>
            
                    ))}
                  </div>
          </section>
    </Main>
  )
}

export default Moive