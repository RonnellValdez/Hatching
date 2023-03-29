import React from 'react'

function NavBar () {
    return (
        <nav>
            <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
            <ul>
            <li><a href="blog.html">Home</a></li>
                <li><a href="#archive">Archive</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;