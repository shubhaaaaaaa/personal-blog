import React from 'react'
import { Link } from 'react-router-dom'

import PostAuthor from './PostAuthor'

const PostItem = ({ id, authorId, category, title, description, thumbnail }) => {

    const shortDescription = description.length > 80 ? description.substr(0, 90)  + '...'  : description;
    const shortTitle = title.length > 45 ? title.substr(0, 45) + '...' : title;
    return (
        <>
            <article className='post'>
                <div className="post_thumbnail">
                    <img src={thumbnail} alt={title} />
                </div>
                <div className="post_content">
                    <Link to={``}>
                        <h2>{shortTitle}</h2>
                    </Link>
                    <p>{shortDescription}</p>
                </div>
                <div className="post_footer">
                    <PostAuthor />
                    <Link to={``} className='category'><i>{category}</i></Link>
                </div>
            </article>
        </>
    )
}

export default PostItem