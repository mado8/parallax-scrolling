import React from 'react';
import './Intro.css'

const Intro = () => {
    const moon = document.getElementById('moon');
    const stars = document.getElementById('stars');
    const sand = document.getElementById('sand-dunes');

    const ScrollEffect = () => {
        let scrollPosition = window.scrollY
        stars.style.left = scrollPosition * 0.09 + 'px'
        moon.style.top = scrollPosition * 0.5 + 'px'
        sand.style.top = scrollPosition * 0.2 +'px'
    }

    window.addEventListener('scroll', ScrollEffect)

    return (
        <section id="parallax">
            <img src={require('../../media/images/stars.png')} alt="background stars" id="stars"></img>
            <img src={require('../../media/images/moon.png')} alt="moon" id="moon"></img>
            <img src={require('../../media/images/sand-dune-1.png')} alt="sand dunes" id="sand-dunes"></img>
        </section>
    )
}   

export default Intro