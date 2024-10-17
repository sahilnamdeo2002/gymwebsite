import React from 'react'
import "./Home.css";
// import image from "../images/gym.jpg";



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
           
            </div>
        </div>

    )
}

export default Home
