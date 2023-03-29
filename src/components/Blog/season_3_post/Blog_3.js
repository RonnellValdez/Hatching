import React from 'react'
import Article from './Article'
//import Comment from './Comment'
import Header from './Header'
//import Sidebar from './Sidebar'
import '../blog.css'
function Blog3() {
    return(
      <div>
          <Header />
          <div class="wrap grid-wrapper">
            <Article />
          </div>

      </div>
    )
  }

export default Blog3;