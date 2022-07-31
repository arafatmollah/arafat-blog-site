import React from 'react';
import { Link } from 'react-router-dom';

const Bloglist = ({blogs}) => {
    return (
        <div className='content'>
            {
                blogs.map(blog =>
                (
                    <div key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>{ blog.author}</p>
                        </Link>
                    </div>
                
                
                ))
           }
        </div>
    );
};

export default Bloglist;