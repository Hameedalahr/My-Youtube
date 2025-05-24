import React, { useState } from 'react'
import VideoCard from './VideoCard'
import { GOOGLE_YOUTUBE_API } from '../utils/constants'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
const VideoContainer = () => {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    fetchYoutubeVideos();
  },[])

  const fetchYoutubeVideos = async() =>{
    const data=await fetch(GOOGLE_YOUTUBE_API);
    const json=await data.json();
    setVideos(json.items)
  }

  return videos.length>0?(
    <div className='flex flex-wrap justify-center pr-[7px]'>
      {
        videos.map((video)=>(
          <Link key={video.contentDetails.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>
        ))
      }
    </div>
  ):<Shimmer/>
}

export default VideoContainer
