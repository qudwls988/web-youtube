import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { FavoriteText } from '../data/favorite'
import VideoCard from '../components/video/VideoCard'

const Favorite = () => {

    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
        setLoading(false)
        },300);
    },[]);

const todayPageClass = loading ? 'isLoading' : 'isLoaded'


  return (
    <Main title="즐겨찾기"  
          description="즐겨찾기 페이지입니다.">

          <section id='favorite' className={todayPageClass}>
            <h2>💕내 즐겨찾기 리스트</h2>
              <div className='video__inner'>
              <VideoCard videos={FavoriteText}/>
              </div>
          </section> 
    </Main>
  )
}


export default Favorite
