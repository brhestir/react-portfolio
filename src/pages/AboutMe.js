import React from 'react';
import profilePicPng from '../assets/images/profilepic.jpeg';

const Home = () => {
	return (
		<>
			<div className="container" id="container-background">

				<div className="card mb-3" style="max-width: 540px;">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={profilePicPng} alt="Brian Hestir" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">Brian Hestir</h5>
								<p className="card-text">Software Engineer from Atlanta, GA.</p>
								<p className="cart-text">Full-Stack Coding Bootcamp Certificate - Georgia Institute of Technology, Atlanta, GA.</p>
								<p className="card-text">Bachelor of Science, Electrical Engineering - Clemson University, Clemson SC.</p>
								<p className="card-text">I love learning and working with others to develop cool software and tools.</p>

								<p className="card-text">Check out my work at <a href="https://github.com/brhestir/">Github</a></p>
								<p className="card-text">Connect with me on <a href="https://www.linkedin.com/in/brian-hestir-9743336/">LinkedIn</a></p>
								<p className="card-text">Email: <a href="mailto:brhestir@gmail.com">brhestir@gmail.com</a></p>
								<a href="https://drive.google.com/file/d/1ksWjp3D2j3AgS3UXsbL9AMS7jhMZAzZd/view?usp=sharing">Resume: PDF</a>

								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>


				{/* <h2 className="text-center m-3">About Me</h2>
					<div className="card-group">
						<div className="card" id="card-content-box">
							<div className="card-body">
								<img src={profilePicPng} className="rounded float-left w-25 mr-3" alt="Brian Hestir"/>
								<p className="card-text">My name is Brian Hestir.  I am a Software Development Engineer from Atlanta, GA.  I am currently enrolled in the Georgia Tech Full-Time Full-Stack Coding Bootcamp.</p>
								<p className="card-text">I have a B.S. in Electrical Engineering from Clemson University.  I love learning new things, developing cool software and working on open-source tools.  On this site you can find recent projects I have worked on within the full-stack program.  Thanks for visiting!</p>
								<p className="card-text">Check out my work at <a href="https://github.com/brhestir/">Github</a></p>
								<p className="card-text">Connect with me on <a href="https://www.linkedin.com/in/brian-hestir-9743336/">LinkedIn</a></p>
								<p className="card-text">Email: <a href="mailto:brhestir@gmail.com">brhestir@gmail.com</a></p>
								<a href="https://drive.google.com/file/d/1ksWjp3D2j3AgS3UXsbL9AMS7jhMZAzZd/view?usp=sharing">Resume: PDF</a>
							</div>
						</div>
					</div> */}
			</div>
		</>
	);
};

export default Home;