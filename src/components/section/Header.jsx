import React from 'react'

import { BiSolidMoviePlay } from "react-icons/bi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoMdMusicalNotes } from "react-icons/io";
import { RiMovie2Line } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { CiBeerMugFull } from "react-icons/ci";
import { CiIceCream } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaGooglePlus } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className="header__logo">
            <a href="/">
                <em aria-hidden='true'></em>
                <span>my<br/>youtube</span>
            </a>
        </h1>
        <nav className="header__menu">
            <ul className='menu'>
                <li className='active'>
                    <a href='/'><BiSolidMoviePlay />My Youtube</a>
                </li>
                <li>
                    <a href='/today'><BiSolidCameraMovie />추천 영상</a>
                </li>
                <li>
                    <a href='/music'><IoMdMusicalNotes />추천 음악</a>
                </li>
                <li>
                    <a href='/movie'><RiMovie2Line />추천 영화</a>
                </li>
                <li>
                    <a href='/book'><GiOpenBook />추천 도서</a>
                </li>
                <li>
                    <a href='/anime'><CiBeerMugFull />추천 애니</a>
                </li>
                <li>
                    <a href='/youtube'><CiIceCream />유튜브 사이트</a>
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href="/youtube">MyYoutube</a>
                </li>
                <li>
                    <a href="/search/html">HTML</a>
                </li>
                <li>
                    <a href="/search/css">CSS</a>
                </li>
                <li>
                    <a href="/search/javascript">JavaScript</a>
                </li>
                <li>
                    <a href="/search/react.js">React.js</a>
                </li>
                <li>
                    <a href="/search/java">JAVA</a>
                </li>
                <li>
                    <a href="/search/oracle">ORACLE</a>
                </li>
                <li>
                    <a href="/search/vue.js">Vue.js</a>
                </li>
            </ul>
        </nav>
        <div className="header__sns">
            <ul>
                <li>
                    <a href="https://github.com">
                    <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com">
                    <RiYoutubeLine />
                    </a>
                </li>
                <li>
                    <a href="https://google.com">
                    <FaGooglePlus />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                    <LuInstagram />
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header