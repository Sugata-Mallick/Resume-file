import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Image } from 'react-bootstrap';
import './Home.css'


const Home = () => {
    return (      
        <div class="container mt-5 ">
  <div class="row">
       <div className="bg-dark icons-container mb-5 d-flex text-center p-5 border-5 rounded-3">
    <div className="col-md-4 "> <Image roundedCircle src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.15752-9/cp0/e15/q65/p261x260/261934212_906934036893283_6207497825629797678_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=58c789&efg=eyJpIjoidCJ9&_nc_ohc=MiTrgy-GvE8AX85rX5F&_nc_ht=scontent.fcgp7-1.fna&oh=01f16118aef6900428369cead6b18dde&oe=61CD8ECF"/></div>
    <div class="col-md-8 text-white">
         <div className="typewriter">
              <h1 className="mb-3">Wellcome, Me <span>Sugata Mallick</span></h1>
<h5 className="mb-5">
A Full Stack web developer experienced in React, Node.js, Express.js, Mongodb and etc many libraries.
</h5> 
</div>
<Button className="m-5 bg-primary border border-2 rounded-3 p-1 text-white" variant="secondary" href="https://www.linkedin.com/in/sugata-mallick-953bba226/">Contact Me</Button>
<Button className="m-5 bg-primary border border-2 rounded-3 p-1 text-white" variant="secondary" href="https://drive.google.com/file/d/1o1MdhS0UYSSwgLQJfDXVzFxZ4ICr4LGr/view?usp=drivesdk">Download Resume</Button></div>
  </div>
</div>   
     </div>
        
    );
};

export default Home;