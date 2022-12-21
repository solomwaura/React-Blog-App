const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
   
    return ( 
        <div className="blogList">
            <h3>{title} </h3>
             {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p id="author">Written by {blog.author}</p>
                    {/* <p>{blog.body}</p> */}
                    <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;