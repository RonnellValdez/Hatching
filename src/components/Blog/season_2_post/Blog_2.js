import React from 'react'
import Article from './Article'
import Header from './Header'
import '../blog.css'
function Blog2() {
    return(
      <div>
          <Header />
          <div class="wrap grid-wrapper">
            <Article />
          </div>

      </div>
    )
  }

export default Blog2;