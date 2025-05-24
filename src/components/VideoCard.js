import React from 'react'
import { useState,useEffect } from 'react';
const VideoCard = ({info}) => {

  const{ snippet , statistics }= info;
  const{channelTitle,title,thumbnails}=snippet;
  const [viewsNotation,setViewsNotation]=useState();
  const [viewDivide,setViewDivide]=useState();
  useEffect(() => {
    if (statistics.viewCount >= 1000000) {
      setViewsNotation("M");
      setViewDivide(1000000);
    } else {
      setViewsNotation("K");
      setViewDivide(100);
    }
  }, [statistics.viewCount]);
  return (
    <div className='mx-2 my-2 w-[300px] h-[300px]'>
      <img className="rounded-lg"src={thumbnails.medium.url}></img>
      <h1 className='w-80 font-bold px-1' >{title}</h1>
      <p className='px-1'>{channelTitle}</p>
      <ul>
        <li className="px-1">{(statistics.viewCount/viewDivide).toFixed(1)}{viewsNotation} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard
