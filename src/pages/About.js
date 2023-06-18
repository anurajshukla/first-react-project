import React from 'react'
import multiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'
function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
        style={{ backgroundImage: `url(${multiplePizzas})` }}>
        </div>
        <div className="aboutBottom">
            <h1> ABOUT US</h1>
            <p> 
            Welcome to our online pizza order website! We are dedicated to bringing you the ultimate convenience and taste when it comes to ordering delicious pizzas from the comfort of your own home. Whether you're hosting a party, enjoying a cozy night in, or simply craving a mouthwatering slice, we've got you covered.
            So, why wait? Treat yourself to a delicious pizza experience like no other. Explore our menu, customize your perfect pizza, and let us take care of the rest. With our online pizza order website, you can enjoy the convenience of doorstep delivery or choose the option for pickup if you prefer. Get ready to savor the flavors, share great moments with your loved ones, and embark on a pizza journey that will leave you craving for more.

Order now and let us bring the taste of perfection right to your doorstep. Welcome to our pizza family!
            </p>

        </div>
    </div>
  )
}

export default About