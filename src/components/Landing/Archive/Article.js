import React from 'react'
import '../Landing.css'
import seasonOneImage from '../../images/season_1_wideshot.png';
import seasonTwoImage from '../../images/season_2_wideshot.png';
import seasonThreeImage from '../../images/wide_angle_shot.png';


function Article () {
    return (
                <section id="archive" class="callout archive">
                <h2>Archive</h2>
        
                <div class="grid-wrapper articles">
                    <article class="col-third">
                        <img src={seasonOneImage} alt="cactus"/>
                        <div>
                            <h3>Season 1 &mdash; Learning to Fly</h3>
                            <p>The start of my minecraft journey, a look back on how my builds started.</p>
                            <button><a href="#mishmash">Read More</a></button>
                        </div>
                    </article>
        
                    <article class="col-third">
                        <img src={seasonTwoImage} alt="bonfire"/>
                        <div>
                            <h3>Season 2 &mdash; Scaling Up</h3>
                            <p>Main street disneyland inspired build with a touch of japanese architecture.</p>
                            <button><a href="#unfinished_pagoda">Read More</a></button>
                        </div>
                    </article>
        
                    <article class="col-third">
                        <img src={seasonThreeImage} alt="dessert"/>
                        <h3>Season 3 - Magical Mountain</h3>
                        <p>Mountain with inspiration from Harry Potter world in Universal Studios Orlando.</p>
                        <button><a href="#magical_mountain">Read More</a></button>
                    </article>
                    
                </div>
            </section>
    )
}

export default Article;