import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { SEARCH_API } from '../utils/constants';
const Head = () => {
    const dispatch =  useDispatch();
    const [searchData,setSearchData]=useState("");
    const [suggestionData,setSuggestionData]=useState([]);
    const [showSuggestion,setShowSuggestion]=useState(true);
    const toggleHandler = () => {
        dispatch(toggleMenu());
    };  
    console.log(suggestionData);

    useEffect(()=>{
        const timer = setTimeout(()=>getSearchSuggestion(),200);
        return()=>{
            clearTimeout(timer);
        }
    },[searchData])

    const getSearchSuggestion=async()=>{
        const data=await fetch(SEARCH_API+searchData);
        const json=await data.json();
        setSuggestionData(json[1]);
    }

    return (
        <div className="grid grid-flow-col p-4  shadow-lg">
        <div className="flex col-span-2 items-center">
            <img
            className='h-10 cursor-pointer'
            alt="hamseburger" 
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            onClick={()=>toggleHandler()}>
            </img>
            <a href="/"><img
            className='h-7 mx-2'
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png">
            </img></a>
        </div>
        <div className="flex flex-col col-span-8">
            <div className='" flex mx-0 items-center"'>
            <input 
            className='border border-gray-500 w-3/4 px-4 rounded-l-full h-12 hover:border-gray-500'
            type="text"
            placeholder='Search'
            value={searchData}
            onChange={(e)=>setSearchData(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            >
            </input>
            <button className='bg-gray-100 px-6 h-12 rounded-r-full border border-gray-500'>
                <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
            </button>
            </div>
            <div className="absolute my-14 bg-white w-[43rem] items-center"> 
                <ul>
                {showSuggestion&&(suggestionData.map((suggestion)=>(
                    <li onClick={() => setSearchData(suggestion)} className='px-5 py-1 shadow-sm  hover:bg-gray-100' key={suggestion}><i className="fa-solid fa-magnifying-glass" style={{color: "#000000" ,padding:"2px",margin:"2px",fontSize:"12px"}}></i>     {suggestion}</li>)))}
                </ul>
            </div>
        </div>
        <div className="col-span-2 flex justify-end items-center">
            <img
            className='h-12 rounded-full border-2 border-red-600'
            alt="profile-avatar"
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg">
            </img>
        </div>
        </div>
    )
    }

    export default Head
