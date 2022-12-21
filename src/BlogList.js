const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    
   
    return ( 
        <div className="blogList">
            <h3>{title} </h3>
             {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p id="author">Author: {blog.author}</p>
                    {/* <p>{blog.body}</p> */}
                    

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;