import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Condition</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias necessitatibus doloribus tempore natus repudiandae, quibusdam iste dignissimos ut culpa voluptas?</p>
            <p>Go Back To <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;