import React from 'react'
import { FavoriteText } from '../../data/favorite'
import { Link } from 'react-router-dom'

const Favorite = () => {
    return (
        <section id='favorite'>
                <h2>💕내 즐겨찾기 리스트</h2>
                <div className='video__inner'>
                    {FavoriteText.map((favorite, key)=>(
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                        <Link to={`/favorite/${favorite.videoId}`}>
                            <img src={favorite.img} alt={favorite.title}/>
                        </Link>
                        </div>
                        </div>
            
                    ))}
                </div>
                </section>
    )
}

export default Favorite
