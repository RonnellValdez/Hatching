import React from 'react'
import blogArticleImage from '../../images/season_1_wideshot.png';

function Article () {
    return (
            <article >
                <img src={blogArticleImage} alt=""/>
                <p>
                    Season 1 was my first experience and most memorable experience with Minecraft. Because of my lack of experience, my builds had no real cohesion, hence the name Mishmash. I started the server by building a massive dirt cathedral, granted it looks nothing like a cathedral.
                </p>
                <p>
                    My second build was a tutrial build of an Aztec pyramid, this was my first build that involved completing an interior. My interior design choice on this build was heavily based off modern builds which included heavy use of grays and wood tones.
                </p>
                <p>
                    Towards the end of the season, I created my final build which was based off the New York, New York hotel/casino located in Las Vegas, Nevada. This build was not a direct 1:1 with the Las Vegas hotel but instead it took the idea of creating a city skyline facade as the face of the build with a more detailed interior within it.
                </p>
            </article>
    )
}

export default Article;