import React from 'react';
import Header from '../components/Header';

function About(){
    return(
        <div className="about">
            <Header/>
            <div className="about-content">
                <h2>About Communion App</h2>
                <p>Communion app is created to connect people from all backgrounds and faiths. We believe in building strong communties through shared experiences and events. Our goal is to provide a platform where individuals can find meaningful connections and support each other.</p>
                <p>We are dedicated to fostering an inclusive environment that promotes understanding and collaboration. Join us in building a better community!</p>
            </div>
        </div>
    );
}
export default About;