import React from 'react';
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const Blogdetails = () => {
    const { id } = useParams()
    const { data, error, load } = useFetch('http://localhost:8000/blogs/' + id)
const navigate = useNavigate()

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method:'DELETE'
        }
        ).then(res => {
            navigate('/',{replace:true})
        })
    }
    return (
        <div className='content'>
            {error && <div>{ error}</div>}
            {load && <div>Loading...</div>}
            {data && (
                <div>
                    <h2>{ data.title}</h2>
                    <article>{data.body}</article>
                    <button onClick={handleDelete}>Delete</button>
               </div>
                
            )}
        </div>
    );
};

export default Blogdetails;