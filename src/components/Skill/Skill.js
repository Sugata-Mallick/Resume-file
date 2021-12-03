import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skill = () => {
    return (
        <div className="m-5">
            <div className="w-75 container p-5 h-100 text-white">
  <h3>HTML</h3><ProgressBar striped variant="success" now={90} />
  <h3>CSS</h3><ProgressBar striped variant="info" now={80} />
  <h3>Javascript</h3> <ProgressBar striped variant="warning" now={60} />
  <h3>React Js</h3> <ProgressBar striped variant="danger" now={70} />
</div>
        </div>
    );
};

export default Skill;