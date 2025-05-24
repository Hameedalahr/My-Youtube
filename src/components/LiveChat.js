import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { randomNameGenerater } from '../utils/helpers'
import { randomMessageGenerator } from '../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { useState } from 'react'
const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage,setLiveMessage]=useState();
    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
                dispatch(addMessage({
                    name:randomNameGenerater(),
                    message:randomMessageGenerator(15)+"🚀"
                }
                ))
            },2000)
        
        return ()=>clearInterval(i)
    },[])
  return (

    <div>
        <div className=' h-[500px] ml-4 border border-gray-300 rounded-t-lg overflow-y-scroll flex flex-col-reverse'> 
      {chatMessages.map((c)=><ChatMessage name={c.name} message={c.message}/>)}
      </div>
      <div className='border border-gray-300 ml-4 mb-4 h-14 flex items-center justify-between rounded-b-lg'>
                <input onChange={(e)=>(setLiveMessage(e.target.value))}className="bg-gray-200 rounded-full w-[550px] py-2 px-4 mx-4" type="text" placeholder='Go on Live Chat'></input>
                <button onClick={()=>dispatch(addMessage({
                    name:"Abdul Hameed Syed",
                    message: liveMessage
                }))}><i className="fa-solid fa-paper-plane" style={{color: "#000000",backgroundColor:"#C5C5C5",padding:"10px",borderRadius:"50px",marginRight:"20px"}}></i></button>
                
        </div>
    
    </div>

  )
}

export default LiveChat
