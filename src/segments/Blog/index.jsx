import "./blog.css"
import {blogPost} from "../../data"

const Blog = () => {
  return (
    <section id="blog">
        <div className="container">
            <div className="section-header">
                <h3>Blog Post</h3>
                <h2>Insights and Innovations</h2>
            </div>
            <div className="blogs-grid">
                {
                 blogPost.map((blog,index)=>(
                  <div className="blog-card" key={index}>
                   <div className="top">
                    <img src={blog.image} alt="blog" />
                   </div>
                   
                    <div className="bottom">
                        <h3 className="line-clamp-2">{blog.title}</h3>
                        <p className="line-clamp-3 description">{blog.content}</p>
                    </div>
                  </div>
                 ))   
                }
            </div>
        </div>
      
    </section>
  )
}

export default Blog
