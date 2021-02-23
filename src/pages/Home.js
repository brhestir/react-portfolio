import React from 'react';

const Home = () => {
	return (
		<>
			<h2>This is the home page</h2>
			<br />

			<div className="container-fluid h-100" id="container-background">
            <div className="row h-100">
                
               
                <div className="col-lg-8 col-sm-8">
                    
               
                    <div className="card" id="card-content-box">
                        <div className="card-body">
                        	<h1 className="card-title">About Me</h1>
													                          
													<img src="./assets/images/profilepic.jpeg" className="rounded float-left w-25 mr-3" alt="Brian Hestir profile thumbnail"/>
													<p className="card-text">My name is Brian Hestir.  I am a Software Development Engineer from Atlanta, GA.  I am currently enrolled in the Georgia Tech Full-Time Full-Stack Coding Bootcamp.</p>
													<p className="card-text">I have a B.S. in Electrical Engineering from Clemson University.  I love learning new things, developing cool software and working on open-source tools.  On this site you can find recent projects I have worked on within the full-stack program.  Thanks for visiting!</p>
													<p className="card-text">Check out my work at <a href="https://github.com/brhestir/">Github</a></p>
													<p className="card-text">Connect with me on <a href="https://www.linkedin.com/in/brian-hestir-9743336/">LinkedIn</a></p>
													<p className="card-text">Email: <a href="mailto:brhestir@gmail.com">brhestir@gmail.com</a></p>
													<p className="card-text">Phone: 470-210-9202</p>
													<a href="https://drive.google.com/file/d/1ksWjp3D2j3AgS3UXsbL9AMS7jhMZAzZd/view?usp=sharing">Resume: PDF</a>
											</div>
										</div>
                </div>

            </div>
					</div>

		</>
	);
};

export default Home;