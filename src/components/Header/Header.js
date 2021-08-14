import React from 'react';
import './Header.css';
import img from './tu-estilo.jpg';

const Header = (props) => {
    return (
        <div className='Header'>
            <img src={img} alt="logo estilo" width='200px'/>
            <p>{props.title}</p>
            
        </div>
    );
};

export default Header
