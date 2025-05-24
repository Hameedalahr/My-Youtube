import React from 'react'
import { COMMENT_LIST } from '../utils/constants'


const Comment=({data})=>{
    const {name,comment,replies}=data
     return(
        <div className="flex items-center py-4">
            <img
            className='h-12 rounded-full border-2 border-red-600'
            alt="profile-avatar"
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg">
            </img>
            <div className='flex flex-col px-4'>
            <h1 className='font-bold'>{name}</h1>
            <p>{comment}</p>
            </div>
        </div>
    )
}
const CommentList=({comments})=>{
    
    return comments.map((comment)=>(
            <div>
            <Comment data={comment}/>
                <div className="mx-5 border border-l-black px-5">
                   {comment.replies?.length > 0 && (
                        <CommentList comments={comment.replies} />
                    )}
                </div>
            </div>
        ))
    


}

const CommentContainer = () => {
    const commentsList=COMMENT_LIST;
    console.log(commentsList);
  return (
    <div>
      <CommentList comments={commentsList}/>
      
    </div>
  )
}

export default CommentContainer
