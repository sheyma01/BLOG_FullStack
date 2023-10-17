import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const history = useHistory();
    const [isPanding, setIsPanding]  = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPanding(true);
        //console.log(blog);
        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log('Blog added!');
            //history.go(-1);
            history.push('/');
        })
    }
    return (  
        <div className="create">
                <h2>Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Blog Title</label>
                    <input type="text" 
                    required
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>
                    <label htmlFor="">Blog Body</label>
                    <textarea 
                    required
                    value={body}
                    onChange={(e)=>{
                        setBody(e.target.value);
                    }}/>
                    <label htmlFor="">Blog Author</label>
                    <select name="" id="" value={author}
                    onChange={(e)=>{
                        setAuthor(e.target.value);
                    }}>
                        <option value="Mario">Mario                   
                        </option>
                        <option value="Yoshi">Yoshi                           
                        </option>
                    </select>
                    {isPanding && <button disabled> Adding ...</button>}
                    {!isPanding && <button> Add blog</button>}
                    
                </form>
                
        </div>
    );
}
 
export default Create;