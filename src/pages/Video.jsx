import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';
import { CiChat1, CiRead, CiStar } from 'react-icons/ci';

const Video = () => {
  const {videoID} = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statics&id=${videoID}`)
    .then((data)=>{
      console.log(data);
      setVideoDetail(data.items[0]);
    });
  }, [videoID]);

  return (
    <Main title="동영상" 
          description="동영상 페이지입니다.">
    <section id="videoViewPage">
      {
        videoDetail &&(
          <div className='video__view'>
              <div className="video__play">
                  <ReactPlayer
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${videoID}`}
                    width='100%'
                    height='100%'
                    style={{position: 'absolute' , top:0, left:0}}
                  />
              </div>
            <div className='video__info'>
              <h2 className='video__title'>
                  {videoDetail.snippet.title}
              </h2>
              <div className='video__channel'>
                <div className='id'>
                  <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
                </div>
                <div className='count'>
                  <span className='view'><CiRead/>{videoDetail.statstics.viewCount}</span>
                  <span className='like'><CiStar/>{videoDetail.statstics.likeCount}</span>
                  <span className='comment'><CiChat1/>{videoDetail.statstics.commentCount}</span>
                </div>
                <div className='video__desc'>
                    {videoDetail.snippet.description}
                </div>
              </div>
            </div>
          </div>
        )
      }

    </section>
    </Main>
  )
}

export default Video