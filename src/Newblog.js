import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Newblog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario')
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  

    const handleSubmit = (e) => {
      e.preventDefault();
      
        const blog = { title, body, author }
      console.log(blog)
      setLoad(true)
  fetch('http://localhost:8000/blogs', {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(blog)
  }).then(res => {
    console.log('blog added')
    setLoad(false)
    navigate('/',{replace:true})

  })
    }
    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Arafat">Arafat</option>
            <option value="Ayaat">Ayaat</option>
            <option value="Ahiyan">Ahiyan</option>
          </select>
          {!load && <button>Add Blog</button>}
          {load && <button disabled>Adding Blog</button>}
        </form>
      </div>
    );
};

export default Newblog;