import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userId, postId, commentId } = useParams()

  return (
    <div className='bg-blue-300 text-center text-2xl rounded shadow-amber-50 font-serif font-bold text-gray-700'>
      <h2>User ID: {userId}</h2>
      <h2>Post ID: {postId}</h2>
      <h2>Comment ID: {commentId}</h2>
    </div>
  )
}

export default User
