import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { GOOGLE_YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import WatchPageVideoCard from './WatchPageVideoCard';
import CommentContainer from './CommentContainer';
import WatchShimmer from './WatchShimmer';
import Shimmer from './Shimmer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const [recommendedVideos,setRecommendedVideos]=useState([])
  const dispatch = useDispatch();
  const [isDescriptionOpen,setIsDescriptionOpen]=useState(false)
  const [likeIsBlue,setLikeIsBlue]=useState(false)
  const [likeIsRed,setLikeIsRed]=useState(false)
  const [isSubscribed,setIsSubscribed]=useState(false);
 
  useEffect(() => {
    dispatch(closeMenu());
    fetchYoutubeVideos();
  }, []);

  const fetchYoutubeVideos = async () => {
    const data = await fetch(GOOGLE_YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  const openedVideo = videos.find((v) => v.id === searchParams.get("v"));
  console.log(openedVideo)


  const likeToggle=()=>{
    setLikeIsBlue(!likeIsBlue);
    setLikeIsRed(false)
    openedVideo.statistics.likeCount=openedVideo.statistics.likeCount++;

  }

  const disLikeToggle=()=>{
 
    setLikeIsRed(!likeIsRed)
    setLikeIsBlue(false)
    openedVideo.statistics.likeCount=openedVideo.statistics.likeCount--;
  }
  // Use `.find` instead of `.filter` here
  const subscribeToggle=()=>{
    setIsSubscribed(!isSubscribed);
  
  }

  const descriptionToggle=()=>{
    setIsDescriptionOpen(!isDescriptionOpen);
  }
  return (
    <div className="p-4 flex">
      <div className='flex flex-col'> 
      <iframe
        className="rounded-xl mx-auto w-full max-w-6xl"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      
      {openedVideo ? (
        <div className="mt-4 max-w-5xl mx-auto">
          <h1 className="text-xl font-bold">{openedVideo.snippet.title}</h1>
          <p className="text-md ">{openedVideo.statistics.viewCount} Views</p>
          <div className="flex items-center justify-between">
            <div className="flex py-4 items-center">
            <img
              className='h-12 rounded-full border-2 border-red-600'
              alt="profile-avatar"
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg">
              </img>
            <p className="text-lg font-bold py-3 pl-4 text-black">{openedVideo.snippet.channelTitle}</p>
            <button onClick={()=>subscribeToggle()} className= {` px-8 mx-4 h-10 cursor-pointer text-white rounded-full text-white ${isSubscribed ? "bg-black" : "bg-red-600"}`}>{isSubscribed? "Subscribed" : "Subscribe"}</button>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center  rounded-full h-12 bg-gray-200'>
                <div className='flex border-r border-gray-400 items-center px-2'>
                <p className='px-2 py-2.5'>{openedVideo.statistics.likeCount/1000}K</p>
                <i className="fa-regular fa-thumbs-up" onClick={()=>likeToggle()} style={{color: likeIsBlue?"#0000FF":"#000000", fontSize:"24px"}}></i>
                </div>
                <div className='flex'>
                <i className="fa-regular fa-thumbs-down" onClick={()=>disLikeToggle()} style={{color: likeIsRed?"#ec0600": "#000000", fontSize:"24px",padding:"15px"}}></i>
                </div>
              </div>
              <div className="flex mx-3  bg-gray-200 px-8 py-3 rounded-full">
                  <button ><i className="fa-solid fa-share" style={{color: "#000000"}}></i></button>
                  <p className="mx-2">Share</p>
              </div>
              <div className="flex mx-3  bg-gray-200 px-8 py-3 rounded-full">
                  <button ><i className="fa-solid fa-download" style={{color: "#000000"}}></i></button>
                  <p className="mx-2">Download</p>
              </div>
            </div> 
          </div> 
          <div 
          className='bg-gray-200 px-2 py-2 rounded-lg hover:bg-gray-300' onClick={()=>descriptionToggle()}>{isDescriptionOpen && (openedVideo.snippet.description.substring())}{(openedVideo.snippet.description.substring(0,150))}.....
          </div>
          <h1 className='pt-5 font-bold text-lg'>Comments</h1>
          <hr></hr>
          <div className='py-5'><CommentContainer/></div>

        </div>
        
      ) : (
        <p>  </p>
      )}
    </div>
      <div className='flex flex-col h-full'>
        <div>
          <LiveChat/>
        </div>
  
      <div className='px-10'>
        {videos.map((video)=>
          <Link key={video.id} to={"/watch?v="+video.id}><WatchPageVideoCard info={video}/></Link>)}
      </div>
      </div>
    </div>
  );
};

export default WatchPage;
