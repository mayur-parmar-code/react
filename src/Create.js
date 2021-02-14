import { useState } from "react";
import {useHistory} from 'react-router-dom';


const Create=()=>{

    const [title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('Mayur');

    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const blog={title,body,author};
        
        fetch('http://localhost:8000/blogs',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added");
            history.push('/');
        })
        
    }
 
    return (
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option>Mayur</option>
                    <option>Dinesh</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
export default Create