import React from 'react';
import './styles.css';
import dylan from './IMG_2186.jpeg'; // Replace with the actual image path

function AboutMe() {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="firstHalf">
        <br/>
          <h1 >Hi I'm Dylan Lawler!</h1>
          <img src={dylan} alt="Dylan's Photo" className="my-photo" />
          <p className="text-small">I'm a computer engineering student at Dartmouth College. My passion and career goals are to explore the fascinating world of technology and creativity. 
          I built this site using React Native and I'm working on turning it into my portfolio in terms of both art and coding projects. My speficic tech interests reside in artificial intelligence, especially its applications in video games. 
          Beyond the digital world, you'll find me expressing myself through drawing and oil painting, diving into a good book, collecting unique treasures, and experimenting with fashion and interior design!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
