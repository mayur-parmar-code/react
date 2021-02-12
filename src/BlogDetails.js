import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails=()=>{

    const {id}=useParams()
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

   const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'delete'
        }).then(()=>{
            history.push('/');
        })
    }

    return(
        <div className="blog-details">
            {isPending && <div>Loding...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p><b>Written By:</b>{blog.author}</p>
                    <br></br>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}> Delete</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;