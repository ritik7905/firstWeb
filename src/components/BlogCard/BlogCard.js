import React from 'react'
// Styles
import "./style.scss"
const BlogCard = (props) => {
    return (
        <div className='blog-card'>
            <div className="card-body">
                <div className="blog_img">
                    <img src={props.blogImg} alt="Loading...." />
                </div>
                <h3 className="title">{props.blogTitle}</h3>
                <p className="description">
                    {props.blogDescription}
                </p>
                <span className='date'>{props.blogDate}</span>
            </div>
        </div>
    )
}

export default BlogCard