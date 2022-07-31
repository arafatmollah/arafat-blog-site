import React from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const {error, load, data}=useFetch('http://localhost:8000/blogs')
 
    return (
        <div>
            {error && <div>{ error}</div>}
            {load && <div>Loading...</div>}
            <Bloglist blogs={data}></Bloglist>
        </div>
    );
};

export default Home;