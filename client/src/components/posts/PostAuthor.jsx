import React from 'react'
import { Link } from 'react-router-dom'

import Author1 from './images/author/shubha.png'

const PostAuthor = () => {
  return (
    <Link to={`/`} className='post_details'>
      <div className="author_avatar">
        <img src={Author1} height={35} width={35} alt="" />
      </div>
      <div className="author_details">
        <p>By: Shubha Khadgi <br />
        <span>Just Now</span>
        </p>
      </div>
    </Link>
  )
}

export default PostAuthor