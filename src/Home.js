import React from 'react'
import "./Home.css";
// import image from "../images/gym.jpg";
// import dragon1 from "./3dslider/dragon_1.jpg";


const Home = () => {
    return (
        <div>
            <div className="home1">
                <h1>We are GYM freakers</h1>
                {/* <p>Join us today and transform your body. Get fit, stay healthy, and enjoy life!</p> */}
            </div>


            <div id='home'>



                <div class="flash-card-row">
                    <div class="flash-card">
                        <div class="flash-card-content">
                            <h2>Get Fit Now!</h2>
                            <p>Join our gym and enjoy the best equipment, trainers, and environment.</p>
                            <img src="your-image-url.jpg" alt="Gym Image" class="flash-card-image" />
                            <button class="flash-card-btn">Join Now</button>
                        </div>
                    </div>
                    <div class="flash-card">
                        <div class="flash-card-content">
                            <h2>Premium Membership</h2>
                            <p>Sign up for our premium membership and access exclusive offers.</p>
                            <img src="your-image-url.jpg" alt="Gym Image" class="flash-card-image" />
                            <button class="flash-card-btn">Learn More</button>
                        </div>
                    </div>
                    <div class="flash-card">
                        <div class="flash-card-content">
                            <h2>Personal Training</h2>
                            <p>Get personalized training plans to reach your fitness goals faster.</p>
                            <img src="your-image-url.jpg" alt="Gym Image" class="flash-card-image" />
                            <button class="flash-card-btn">Sign Up</button>
                        </div>
                    </div>



                </div>

            </div>



            <div id="features">
                <div className="banner">
                    <div className="slider" style={{ '--quantity': 10 }}>
                        <div className="item" style={{ '--position': 1 }}><img src="./3dslider/dragon_1.jpg" alt="Dragon 1" /></div>
                        <div className="item" style={{ '--position': 2 }}><img src="/3dslider/dragon_2.jpg" alt="Dragon 2" /></div>
                        <div className="item" style={{ '--position': 3 }}><img src="/3dslider/dragon_3.jpg" alt="Dragon 3" /></div>
                        <div className="item" style={{ '--position': 4 }}><img src="/3dslider/dragon_4.jpg" alt="Dragon 4" /></div>
                        <div className="item" style={{ '--position': 5 }}><img src="/3dslider/dragon_5.jpg" alt="Dragon 5" /></div>
                        <div className="item" style={{ '--position': 6 }}><img src="/3dslider/dragon_6.jpg" alt="Dragon 6" /></div>
                        <div className="item" style={{ '--position': 7 }}><img src="/3dslider/dragon_7.jpg" alt="Dragon 7" /></div>
                        <div className="item" style={{ '--position': 8 }}><img src="/3dslider/dragon_8.jpg" alt="Dragon 8" /></div>
                        <div className="item" style={{ '--position': 9 }}><img src="/3dslider/dragon_9.jpg" alt="Dragon 9" /></div>
                        <div className="item" style={{ '--position': 10 }}><img src="/3dslider/dragon_10.jpg" alt="Dragon 10" /></div>
                    </div>
                    <div className="content">
                        <h1 data-content="CSS ONLY">CSS ONLY</h1>
                        <div className="author">
                            <h2>LUN DEV</h2>
                            <p><b>Web Design</b></p>
                            <p>Subscribe to the channel to watch many interesting videos</p>
                        </div>
                        <div className="model"></div>
                    </div>
                </div>
            </div>






        </div>

    )
}

export default Home
