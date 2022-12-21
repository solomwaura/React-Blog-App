import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My NodeJs Website',body: 'Web Development using NodeJs',author: 'prime',id: 1},
        {title: 'Governace and Leadership',body: 'Dictatorship leadership',author: 'Optimus',id: 2},
        {title: 'Technology and Social Effects',body: 'Social Media Dilema and Mentality BoredRoom',author: 'Optimus',id: 3},
        {title: 'Modern Technology Developments',body: 'The new GPTChat AI technology',author: 'prime',id: 4},
    ]);

    const [name, setName] = useState('Prime');

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        console.log('use effect run');
        console.log(name);
    },[name]);
 
    return ( 
        <div className="home">
             <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>
             <button onClick={()=> setName('optimus')}>Change Name</button> 
             <p>{name}</p>
         </div>
     );
}
 
export default Home;