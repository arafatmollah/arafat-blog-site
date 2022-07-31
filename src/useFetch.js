import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data,setBlogs]=useState([])
    const [load, setLoad] = useState(true)
    const [error, seterror] = useState(null)
    
    useEffect(() => {
        setTimeout(() => {
            
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not find the data')
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data)
                    setLoad(false)
                    seterror(null)
                })
                .catch(err => {
                    setLoad(false)
                    seterror(err.message)
                    
           })
        },1000)
    }, [url])
    
    return {data, load, error}
};

export default useFetch;