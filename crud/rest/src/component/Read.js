import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [apiData, setApiData] = useState([])

    function getData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setApiData(response.data);
                
            })
    }

    function handleDelete(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/posts${id}`)
            .then(() => {
                getData();
            })
    }

    function setDataToStorage(id, title, body){
        localStorage.setItem('id',id);
     
        localStorage.setItem('title',title);
        localStorage.setItem('body',body);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>
                        <Link to='/create'>
                            <button className='btn btn-primary'>Create New Data</button>
                        </Link>
                    </div>

                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                
                                <th>TITLE</th>
                                <th>BODY</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                
                                                <td>{item.title}</td>
                                                <td>{item.body}</td>
                                                <td>
                                               <Link to='/edit'>
    <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.title, item.body)}>Edit</button>
                                                    </Link>
                                                </td>
  <td><button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(item.id) } }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read