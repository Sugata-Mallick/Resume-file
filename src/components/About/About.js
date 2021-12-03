import React from 'react';
import { Image } from 'react-bootstrap';

const About = () => {
    return (
        <div class="container mt-5 ">
        <div class="row">
             <div className="bg-dark mb-5 icons-container d-flex text-center p-5 border-5 rounded-3">
          <div className="col-md-4 "> <Image roundedCircle src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/cp0/e15/q65/p261x260/261934212_906934036893283_6207497825629797678_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=58c789&efg=eyJpIjoidCJ9&_nc_ohc=MiTrgy-GvE8AX85rX5F&_nc_ht=scontent.fcgp7-1.fna&oh=01f16118aef6900428369cead6b18dde&oe=61CD8ECF"/></div>
          <div class="col-md-8 text-white">
          <h1 class="about">About Me</h1>
        <p>
          I am a person who is positive about every aspect of life. There are many things I like to
          do, to see, and to experience. I like to read, I like to write; I like to think, I like to
          dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like
          to see the moonlight at night; I like to feel the music flowing on my face, I like to
          smell the wind coming from the ocean.
        </p></div>
        </div>
      </div>   
           </div>
      
    );
};

export default About;
