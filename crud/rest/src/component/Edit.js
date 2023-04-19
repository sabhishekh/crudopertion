import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [id, setId] = useState(0);
    
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      setId(localStorage.getItem('id'));
    
      settitle(localStorage.getItem('title'));
      setbody(localStorage.getItem('body'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts${id}`,{
      
            title: title,
            body: body
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }

  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
            <div className='mb-2 mt-2'>
                <Link to='/'>
                    <button className='btn btn-primary'>Read Data</button>
                </Link>
            </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
                
                
                <div className='form-group'>
                    <label>Enter title: </label>
                    <input type='text' value={title} onChange={(e) => settitle(e.target.value)} placeholder='title' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Enter body: </label>
                    <input type='text' value={body} onChange={(e) => setbody(e.target.value)} placeholder='body' className='form-control' />
                </div>
                <br />
                <div className='d-grid'>
                    <input type='submit' value='Update' className='btn btn-primary' />
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Edit