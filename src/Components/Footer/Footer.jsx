import React from 'react';
import './Footer.css';
import {BsLinkedin,BsFacebook } from "react-icons/bs";
import {AiFillInstagram }  from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
        <span> Copyright & copy 2021 Travel. All rights reserved</span>
        <ul className='Links'>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#home'>Home</a>
            </li>
        </ul>
        <ul className='Social__Links'>
            <li><BsFacebook /></li>
            <li><BsLinkedin/></li>
            <li><AiFillInstagram /></li>
        </ul>
    </div>
  )
}

export default Footer