import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div>
      <hr></hr>
      <div className='m-3 flex items-center ml-2'>
      <img
            className='h-12 rounded-full border-2 border-red-600 '
            alt="profile-avatar"
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg">
        </img>
        <span className='m-2 font-bold text-gray-700'>{name}</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage
