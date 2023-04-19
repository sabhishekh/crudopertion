import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function Create() {

    
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            
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
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        
                        
                        <div className='form-group'>
                            <label>Enter title: </label>
                            <input type='text' placeholder='title' onChange={(e) => settitle(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter body: </label>
                            <input type='text' placeholder='body' onChange={(e) => setbody(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />
                        </div>
                    </form>

                   
                    
                    {title}
                    <br />
                    {body}
                </div>
            </div>
        </>
    )
}

export default Create