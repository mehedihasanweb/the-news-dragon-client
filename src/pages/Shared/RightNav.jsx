import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from './Qzone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub />Login With Github</Button>
            <div className='mb-3'>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                        <FaFacebookF />
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        <FaTwitter />
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                        <FaInstagram />
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone />
            <div className='image'>
                <h2>Create Amazing Newspaper</h2>
                <p className='pt-3 pb-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;