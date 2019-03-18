import React, { Component } from 'react';

import home from './home.css';
import { default as image004 } from 'src/RootComponents/Category/images/004.jpg';
import { default as image006 } from 'src/RootComponents/Category/images/006.jpg';
import { default as image003 } from 'src/RootComponents/Category/images/003.jpg';


class Home extends Component {

    render() {
        return (
            <article>
             <section className="Home-hero">
                    <h1 className="Home-hero-title">
                        <span>&lsquo;Fall&rsquo; In Love With</span>
                        <br />
                        <span>Pieces Inspired By Paris</span>
                    </h1>
                    <img src= 
                        {require('./images/home.jpg')} />
                    </section>
                
                <section className="Home-recommended">
                    <h2 className="weRecommend">
                            <span>We sure this is something for you</span>
                    </h2>  
                <ul className={home.recommendList}>
              
                    <li className={home.listBody}>
                    <a href="flora-tank-dress.html"><img src={image006} /></a></li>
                    <li className={home.listBody}>
                    <a href="felicia-maxi-dress.html"><img src={image004}/></a> </li>
                    <li className={home.listBody}>
                    <a href="karena-halter-dress.html"><img src={image003} /></a></li>
                </ul>
              
                </section>


                <section className="Home-storySection">
                    <h2 className="StorySection">
                        <span>Our Story</span>
                    </h2>
                    <div className="Home-storySection-content">
                        <h2 className="Home-storySection-content-copy">
                            <span>
                                Style is personal. Realizing this wasnt what               
                                most brands were sensitive to, we built a
                                lifestyle brand that caters to creative,
                                sensitive, strong women.
                            </span>
                        </h2>
                        <h2 className="Home-storySection-content-copy">
                            <span>
                                Venia opened its very first doors in the autumn
                                of 1992 in Lima, Peru. We now operate over 200
                                stores worldwide.
                            </span>
                           <a
                                className="Home-storySection-content-actions-action"
                                href="venia-dresses.html"
                            >
                                <span>Read More</span>
                            </a>
                       </h2>
                    </div>
                </section>
           </article>

        );
    }
}

export default Home;
