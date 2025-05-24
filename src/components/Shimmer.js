import React from 'react'
import { useState,useEffect } from 'react';

const Shimmer = () => {
    const arr=[1,2,3,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div className="flex flex-wrap justify-center">
        {arr.map((value)=><div className="w-[300px] h-[180px] bg-gray-200 rounded-lg mx-5 my-3"></div>)}
        
    </div>
  )
}

export default Shimmer
