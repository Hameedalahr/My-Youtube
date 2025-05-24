import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen=useSelector((store) => store.app.isMenuOpen);
  
  if (!isMenuOpen) return null; 
  return (
    <div className="w-[300px] shadow-lg px-4 mt-4 text-md ">
      <ul>
        <Link to="/"><li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-house" style={{color: "#000000", padding:"15px"}}></i>Home</li></Link>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-film" style={{color: "#000000", padding:"15px"}}></i>Shorts</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-brands fa-youtube" style={{color: "#000000", padding:"15px"}}></i>Subscriptions</li>
      </ul>
      <h1 className="font-bold py-2 text-lg">You</h1>
      <ul>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-clock-rotate-left" style={{color: "#000000", padding:"15px"}}></i>History</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-film" style={{color: "#000000", padding:"15px"}}></i>Playlists</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-video" style={{color: "#000000", padding:"15px"}}></i>Your Videos</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-chalkboard-user" style={{color: "#000000", padding:"15px"}}></i>Your Courses</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-swatchbook" style={{color: "#000000", padding:"15px"}}></i>Watch later</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-thumbs-up" style={{color: "#000000", padding:"15px"}}></i>Liked Videos</li>
      </ul>
      <h1  className="font-bold py-2 text-lg">Explore</h1>
      <ul>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-fire" style={{color: "#000000", padding:"15px"}}></i>Trending</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-bag-shopping" style={{color: "#000000", padding:"15px"}}></i>Shopping</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-music" style={{color: "#000000", padding:"15px"}}></i>Music</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-film" style={{color: "#000000", padding:"15px"}}></i>Movies</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-headset" style={{color: "#000000", padding:"15px"}}></i>Live</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-gamepad" style={{color: "#000000", padding:"15px"}}></i>Gaming</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-newspaper" style={{color: "#000000", padding:"15px"}}></i>News</li>
        <li className="w-[200px] text-lg  hover:bg-gray-200 rounded-lg"><i className="fa-solid fa-volleyball" style={{color: "#000000", padding:"15px"}}></i>Sports</li>
      </ul>
    </div>
  )
}

export default SideBar
