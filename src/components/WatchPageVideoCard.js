import React from 'react'
import { useState,useEffect } from 'react';
const WatchPageVideoCard = ({info}) => {
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
      <div className=' mb-4 size-30 flex'>
        <img className="rounded-lg size-22"src={thumbnails.medium.url}></img>
        <div className='flex flex-col jus'>
        <h1 className='w-80 font-bold px-4' >{title}</h1>
        <p className='px-4'>{channelTitle}</p>
        <ul>
          <li className="px-4">{(statistics.viewCount/viewDivide).toFixed(1)}{viewsNotation} Views</li>
        </ul>
        </div>
      </div>
    )
}

export default WatchPageVideoCard
