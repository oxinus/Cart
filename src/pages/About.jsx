import React from 'react';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-text'>about</div>
            <div className='content'>this project was build by a beginner guy<br />take it easy&#128513;</div>
            <a href='https://github.com/oxinus/Cart' target='_blank_' className='git-link'>
                <img src='img/git-img/5.png' alt='' className='git-img'/>
                <span>visit repo</span>
            </a>
        </div>
    )
}

export default About
