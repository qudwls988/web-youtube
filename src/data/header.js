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


export const headerMenus =[
    {
        title:"My Youtube",
        icon: <BiSolidMoviePlay />,
        src : "/"
    },
    {
        title:"추천 영상",
        icon: <BiSolidCameraMovie />,
        src: "/today"
    },
    {
        title:"추천 음악",
        icon: <IoMdMusicalNotes />,
        src: "/music"
    },
    {
        title:"추천 영화",
        icon: <RiMovie2Line />,
        src: "/movie"
    },
    {
        title:"추천 도서",
        icon: <GiOpenBook />,
        src: "/book"
    },
    {
        title:"추천 애니",
        icon: <CiBeerMugFull />,
        src: "/anime"
    },
    {
        title:"유튜브 사이트",
        icon: <CiIceCream />,
        src: "/youtube"
    } 
];

export const searchKeyword=[
    {
        title: "MyYoutube",
        src: "/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    },
];

export const snsLink =[
    {
        title:"github",
        url:"https://github.com",
        icon:<FaGithub />
    },
    {
        title:"youtube",
        url:"https://youtube.com",
        icon: <RiYoutubeLine />
    },
    {
        title:"google",
        url:"https://google.com",
        icon:<FaGooglePlus />
    },
    {
        title:"instagram",
        url:"https://instagram.com",
        icon:<LuInstagram />
    },
];