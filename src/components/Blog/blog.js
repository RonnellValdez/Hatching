import React from 'react'
import Blog1 from './season_1_post/Blog_1'
import Blog2 from './season_2_post/Blog_2'
import Blog3 from './season_3_post/Blog_3'
import './blog.css'


function Blog() {
    return(
      <div>
        <Blog3/>
        <Blog2/>
        <Blog1/>

      </div>
    )
  }

export default Blog;