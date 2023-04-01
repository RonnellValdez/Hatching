import React from 'react'
import blogArticleImage from '../../images/street_trolley.png';

function Article () {
    return (
            <article id="chunk">
                <img src={blogArticleImage} alt=""/>
                <p>Inspired from BDouble100 on the hermitcraft server, I wanted to build my base in the style of 1920's American architecture. In particular, Main Street USA located in Disneland. This was my first build on a public server so I was also able to use resources that i would have otherwise found difficult to gather. There were also other builds (christmas district, industrial district) that I had built on the server that are not pictured here.
                </p>
            </article>
    )
}

export default Article;