import NavigationBar from "./NavigationBar";
import React from "react";
import useScreenSmall from "../hooks/useScreenSmall";

function AboutMe(){
  
const isSmall = useScreenSmall()

  return(
    <>
    <NavigationBar title={"About Me"}/>
    <div id="about"></div>

    <div className="aboutOuter">

    <div className={isSmall ? "aboutSmallScreen" : "about"}>
      <h1>About Me - Travis Lamberte</h1><br></br>
      <p>

      <b>Objective:</b><p></p>
Seeking position as a Jr. software developer, in a fast-paced environment where I can use my skills in frontend web development with React, backend Firebase cloud knowledge, React-Native mobile device development, and hands on automated software testing skills to become an important part of a larger project.
</p><br></br>
    <p>
<b>Summary:</b>
<p></p>
Strong experience producing documented, clean, well-written, best practice code with massive scalability while at the same time ensuring the code can be easily refactored into mobile applications.
<p></p><br></br>
Having 5 years of personal experience building software in python, React, and JavaScript, for web applications that are up and online.
<p></p><br></br>
Seasoned React developer creating clean components with well thought-out and placed hooks, to make the best use of the state and props systems.
<p></p> <br></br>
Strong background in JavaScript, HTML, and CSS, with a focus on full multi-page, web application builds, with strong emphasis on visual design, interactivity, responsiveness, and functionality.
<p></p> <br></br>
Work closely with design, organization, server-side hosting, automated software testing, and deployment, to ensure web applications are deployed on time and being well maintained.
</p><br></br>
    <p>
<b>Skills:</b>
<p></p>
C#, React, Python, JavaScript, HTML, CSS, Chat-GPT, Docker, Command-Line-Git, GitHub, Visual Studio Code, Windows, Terminal, Linux, MS Office, Excel, Math, & the ability to self-study and learn new technologies.
</p><br></br>
    <p>
<b>Education:</b>
<p></p> 	
	Foundational C# with Microsoft 	Sep 2023<p></p>
	Microsoft Learn
  </p><br></br>
    <p>
	Modern React with Redux, React three fiber [2023]	July 2023<p></p>
	Udemy.com	
  </p><br></br>
    <p>
	Bachelor of Science in Math and Chemistry	June 2007<p></p>
		Central Washington University, Ellensburg, WA

    </p><br></br>
<br></br>
    <p>
<b>More About Me</b> <p></p> 
I was born in a small town in the Yakima Valley in WA State. It remains today, a dry irrigated desert oasis in the summer and a frozen otter pop in the winter. Out of town, there's farms until one reaches the basalt plains, then there's big sky.
</p><br></br>
<p>
Early in life I liked math and started applying myself to be ready to go on to a University. I didn't know what I wanted to study so I picked chemistry, education, and math. It could have been any of the sciences (I like them all). In the Yakima Valley, K-12 educators are hireable, and the profession is a safe bet. So there, in Yakima, I recieved an associate of arts degree in early childhood education, with most of my electives being math and science. Afterwards, I moved to Central Washington University. Although I had a lot of credits in education, I decided to take a Bachelors of Science in Chemistry with a minor in Math.
</p><br></br>
<p>
During my time at the CWU, a degree in chemisty required electives to be filled with engineering courses. Since the math classes were going to my minor, I took a lot of engineering courses as well. It was through the instructors in these courses that I was able to get to know my future employer, North Star Casteel. I took a job as an intern at North Star in 2007.
</p><br></br>
<p>
North Star Casteel is a full Steel Casting facility specializing in Manganese Steel. It's a small company of around 70 emoloyees, each office manager works directly with the employees and the owners. After my internship I moved into several different roles at North Star as the Assistant Manager. Writting procedures comes naturally to me. I would leave a role better off as I moved on to another. I would improve the process as much as I could, make up written procedures for the more technical aspects of the process, then move on to another position (anywhere I was needed), all while being available for questions on my knowlegde base from previous positions. Some positions I filled for long periods of time, getting to know and improve the systems and the whole time working with employees and the owners to keep the foundry running as efficiently as possible. This job was nice but... I had always felt the desire to learn programming and work as a software developer.
</p><br></br>
<p>
During the pandemic I started several new hobbies. Among them was programming in python using sublime text editor and the pygame library to build games. North Star was able to remain in operation and we kept production going while diligently following covid mandates. However, with Seattle's public places shut down for the better part of 2 years. I had more than enough personal time to spend working in python. So for years I ran the foundry in the day time (other managers worked from home as much as they could) and in the evenings, I wrote code, studied tutorials, and practiced new technologies. I decided that coding was what I wanted to pursue, and at one point subscribed to Udemy.com and started studying several more technologies. For some reason learning comes easy for me. Over time I graduated to using Visual Studio. I've become more confident in Linux, and have become familiar with docker containers, GitHub, and Scripting as well. I even log into HackerRank to earn badges and get certificates. As Seattle opens back up following the pandemic, it seems different but the same. Everything is moving quickly and I want to find a place to fit into the tech community.
</p><br></br>
<p>
Seattle is a great city in a terrific area. From the waterways of the Puget Sound to the mountain trails of the Cascades. The Pike Market Place to the Smith Tower Obeservation Deck. The City has a lot to offer. I've enjoyed it here, and consider myself from Seattle.
</p><br></br>
<p>
I enjoy any technical hobbies. I build ukuleles, and I make a terrific home brewed IPA. Lately, I can be found developing games in python or javascript, working on my web site in React, or taking udemy classes in any language or data structure I find interesting. My goal at this very moment is to move out of the steel foundry position and get hired as a software developer.
</p><br></br>
<p>
Footnote:
</p><br></br>
<p>
Welcome to LamberteDesign.com and thank you for taking the time to browse my web page. I'm currently trying to change my career from a modestly paid steel foundry manager to become a better paid software developer. I know this wont be easy and I'm prepared to work very hard as a Jr. developer while I gain experience. I'm looking for that first job. Email me if you have a job opening you think I would be good at filling.

</p>
    </div>
          
    </div>
    </>
  )
}



export default AboutMe;