import React from 'react'
import blogArticleImage2 from '../../images/wide_angle_shot.png';

function Article () {
    return (
            <article>
                {/* <h3>January 2023</h3>
                <h2>The end of a magical world</h2> */}
                <img src={blogArticleImage2} alt=""/>
                <p>Magical mountain was my season 3 build on the back to bedrock minecraft server. This mountain was inspired by my recent trip to Universal Studios Orlando. I tried to recreate the atmosphere of the Harry Potter portion of the park. I was also inspired by Grian, a member of the Hermitcraft Server on youtube, who built a beautiful render of Gringotts Bank from Harry Potter.
                </p>
            </article>
    )
}

export default Article;