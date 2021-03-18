import React from "react";
import "./style.css";

const About = () =>{
  return (
    <section id="about" class="container">
    <div class="container selfIntro">
      <h1>Thanks for visiting!</h1>

      <h5 class="subtitle">
       Hi, I am Kehong Li. I was born and grew up in a small village in the middle of China. Because of complicated reasons, after graduated from high school in 2011, I determined to come to America to peruse freedom and eventually land on US soil in 2013 as a student. Because I love America and wanted to be a part of our country, in 2016 I enlisted for the US army reserve to become an American. I graduated from OSU in 2017 and was kept waiting for the army to send me to basic training and my citizenship. Finally, after a long and painful waiting period, I was naturalized on Sep 26th, 2019.
      </h5>
      <h5 class = "subtitle">
      After I became a US citizen, I worked for Team Fishel for 6 months and then decided to enroll in an OSU full stack web developer boot camp to start my software developer career. I think I am a really good student in the boot camp and ready for a web developing job.
      </h5>
      <h6>
        ⚡ Fun fact: The address of my personnal page and email go as: I-Li-Kehong, which is I+{`myLastName`}+{`myFirstName`}, instead of "I like hong". People often wonder, who is Hong?
        </h6>
      </div>
  </section>
  )
}

export default About;