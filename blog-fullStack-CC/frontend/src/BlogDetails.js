import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const{id} = useParams();
    const history = useHistory();
    const {error, isPending, Mydata:blog} = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log('Blog added!');
            //history.go(-1);
            history.push('/');
        })
    }
    const handleUpdate = ()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'PUT',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log('Blog updated!');
            //history.go(-1);
            history.push('/create');
        })
    }

    return ( 
        <div className="blog-details">
        {error && <div>{error} </div>}
        {isPending && <div>Loading...</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>delete</button>


                <div className="update">
                <h2>Update the Blog</h2>
                <form /* onSubmit={handleSubmit} */>
                    <label htmlFor="">Blog Title</label>
                    <input type="text" 
                    required
                    value={blog.title}
                    onChange={(e)=>{
                        /* setTitle(e.target.value); */
                    }}/>
                    <label htmlFor="">Blog Body</label>
                    <textarea 
                    required
                    value={blog.body}
                    onChange={(e)=>{
                        /* setBody(e.target.value); */
                    }}/>
                    
                    
                    <button onClick={handleUpdate}>update</button>

                    
                </form>
                
                </div>
            </article>
        )}
      </div>
     );
}
 
export default BlogDetails;