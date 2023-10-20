import React from 'react';
import './App.css';

function Resume() {
  const sectionStyle = {
    marginBottom: '20px',
  };

  const experienceStyle = {
    marginLeft: '20px',
  };

  return (
    <div className="container">
      <div style={sectionStyle}>
        <h1>EDUCATION</h1>
        <p>
          <strong>Dartmouth College, Hanover, NH</strong><br />
          <i>Bachelor of Engineering in Computer Engineering</i><br />
          Jun. 2024<br />
          GPA 3.96/4.0
        </p>
        <br/>

        <p>
          <strong>Dutchess Community College, Poughkeepsie, NY</strong><br />
          <i>Dual Enrollment</i><br />
          Jun. 2020<br />
          GPA 4.0/4.0
        </p>
        <br/>

        <p>
          <strong>Dover High School, Dover Plains, New York</strong><br />
          Jun. 2020<br />
          GPA: 106/100 (Weighted)
        </p>
      </div>

      <div style={sectionStyle}>
        <h1>RELEVANT VOLUNTEER AND EXPERIENCE</h1>
        <div style={experienceStyle}>
          <p>
            <strong>NH BioMade-NH EPSCoR</strong><br />
           <i>Materials Science Intern</i> <br />
            Jun. 2022-Present<br />
            - Study the tendency of corrosion of biometals and high entropy alloys through Potentiodynamic and Linear Polarization tests.<br />
            - Plot the test data against different materials, electrolytes, and temperatures using Matlab and Excel.<br />
            - Used a Micropolisher and Vibromet on to increase the accuracy of reaction during corrosion tests.<br />
            - Inspect the landscape and imperfections of metals through a scanning electron microscope to ensure they were polished adequately.
          </p>
        </div>
        <br />

        <div style={experienceStyle}>
          <p>
            <strong>Dartmouth College</strong><br />
            <i>Teaching Assistant - Introduction to Engineering</i><br />
            Sep. 2023-Present<br />
            - Assist students in identifying and evaluating social problems, promoting critical thinking.<br />
            - Support students in generating and implementing engineering solutions.<br />
            - Oversee and mentor students in prototype development.<br />
            - Collaborate on experimental design and data analysis.
          </p>
        </div>
        <br />

        <div style={experienceStyle}>
          <p>
            <strong>Maid Different LLC</strong><br />
            <i>Customer Service Order Specialist</i><br />
            Jun. 2023-Sep. 2023<br />
            
            - Provided thorough and efficient cleaning services customized to the client's preference.<br />
            - Traveled to and from work sites in a timely manner.<br />
            - Replenished supplies when needed such as bathroom items, linens, cleaning supplies, etc.<br />
            - Maintained the upkeep of all hard surfaces by dusting, sanitizing, washing or waxing when needed.<br />
            - Maintained all carpets, hardwood, marble and tile flooring.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h1>AWARDS AND ACHIEVEMENTS</h1>
        <p>
          <strong>Dover High School Valedictorian </strong><p>2020</p><br />
          <strong>Advanced Regents Diploma With Honors Designation</strong> <p>2020</p><br />
          <strong>AP Scholar with Distinction </strong><p>2020</p><br />
          <strong>Rensselaer Polytechnic Institute Rensselaer Medal </strong><p>2020</p>
          
        </p>
      </div>

      <div style={sectionStyle}>
        <h1>OTHER EXPERIENCE</h1>
        <p>
          <strong>Automated Image Analysis of Ephemeral Rivers Project </strong>  <br />
          <i>Member</i> 
          <br/>
          Sep. 2023-Present
        </p>
        <br/>
        <p>
          <strong>Dartmouth College First Generation Low Income Students</strong><br />
          <i>Member</i> 
          <br/>
          Sep. 2020-Present
        </p>
        <br/>
        <p>
          <strong>Dartmouth College 2024 Questbridge Chapter</strong><br />
          <i>Member</i> 
          <br/>
          Sep. 2020-Present
        </p>
        <br/>
        <p>
          <strong>Dartmouth College First HackDartmouth Club</strong><br />
          <i>Member</i> 
          <br/>
          Sep. 2021-Present
        </p>
      </div>

      <div style={sectionStyle}>
        <h1>OTHER SKILLS</h1>
        <p>

          Proficient in Python, Java, C, Unix, Matlab, SolidWorks, HTML, JavaScript, CSS, React Native, Procreate Graphic Design App, 2D Art and Design.
        </p>
        <br/>
      </div>
    </div>

  );
}

export default Resume;
