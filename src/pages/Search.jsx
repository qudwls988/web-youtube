import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoSearch from '../components/video/VideoSearch'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'


const Search = () => {

  const { searchId } = useParams();
  //search/123 -> useParams {searchID:"123"}


  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setVideos([]);
    fetchVideos(searchId)
    setLoading(false)
  },[searchId]);

  const fetchVideos = (query, pageToken='') => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
    .then((data) => {
      setNextPageToken(data.nextPageToken)
      setVideos((prevVideo) => [...prevVideo, ...data.items]);
    })
    .catch((error)=>{
      console.log('Error fetching data', error)
    })
    
  }

  const handleLoadMore = () => {
    if(nextPageToken){
      fetchVideos(searchId, nextPageToken)
    }
  }

  const searchPageClass = loading ? 'isLoading' : 'isLoaded'; 

  return (
    <Main title="유튜브 검색"
    description="검색 페이지입니다.">

      <section id= 'searchPage' className='{searchPageClass}'>
        <div className="video__inner search">
          <VideoSearch videos={videos}/>
        </div>
        <div className='video__more'>
          {nextPageToken && (
            <button onClick={handleLoadMore}>더 보기</button>
          )}
        </div>
      </section>


    </Main>
  )
}

export default Search