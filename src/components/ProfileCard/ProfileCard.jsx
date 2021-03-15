import React from 'react';
import profilePicPng from '../../assets/images/profilepic.jpeg';

const ProfileCard = () => {
	return (
		<div>
			<div className="container" id="container-background">
				<div className="card-group shadow bg-body">
					<div className="card">
						<div className="row g-0">
							<div className="col-md-4">
								<img src={profilePicPng} alt="Brian Hestir" style={{ height: "370px", objectFit: "cover" }}/>
							</div>

							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Brian Hestir</h5>
									<h6 className="card-subtitle">Software Engineer</h6>
									<small className="text-muted">Atlanta, GA</small><br/>

									<br/>
									<h6 className="card-text">Education:</h6>
									<i class="fas fa-certificate"></i><span> </span>
									<span className="cart-text">Software Development, Full-Stack Certificate</span><br/>
									<small className="text-muted">Georgia Institute of Technology, Atlanta, GA.</small><br/>

									<i className="fas fa-scroll"></i><span> </span>
									<span className="card-text">Bachelor of Science, Electrical Engineering</span><br/>
									<small className="text-muted">Clemson University, Clemson SC.</small><br/>
									<br/>
									
									<h6 className="card-text">Skills:</h6>
									<a href="https://en.wikipedia.org/wiki/Electronics" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-electron-original"> </i>Electronics</a><span> </span>
									<a href="https://en.wikipedia.org/wiki/Embedded_system" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary">Embedded</a><span> </span>
									<a href="https://en.wikipedia.org/wiki/Assembly_language" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary">asm</a><span> </span>
									<a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-c-plain"> </i>C</a><span> </span>
									<a href="https://isocpp.org/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-cplusplus-plain"> </i>C++</a><span> </span>
									<br/>
									<a href="https://www.ecma-international.org/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-javascript-plain"> </i>Javascript</a><span> </span>
									<a href="https://nodejs.org/en/about/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-nodejs-plain"> </i>NodeJS</a><span> </span>
									<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-npm-original-wordmark"> </i>npm</a><span> </span>
									<a href="https://jquery.com/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-jquery-plain"> </i>JQuery</a><span> </span>
									<a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-express-original"> </i>Express</a><span> </span>
									<a href="https://socket.io/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary">Socket.IO</a><span> </span>
									<a href="https://www.vim.org/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-vim-plain"> </i>Vim</a><span> </span>
									<br/>
									<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-react-original"> </i>ReactJS</a><span> </span>
									<a href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-mysql-plain"> </i>MySQL</a><span> </span>
									<a href="https://sequelize.org/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-sequelize-plain"> </i>Sequelize</a><span> </span>
									<a href="https://mongoosejs.com/" target="_blank" rel="noreferrer" className="badge badge-pill badge-primary"><i class="devicon-mongodb-plain"> </i>MongoDB/Mongoose</a><span> </span>
									
								</div>
							</div>
					
						</div>
					
						<div className="row g-0">
							<div className="col-12">
								<div className="card-body">
									<ul className="list-group list-group-flush">
										<li className="list-group-item">I love learning and working with others to develop cool software and tools.</li>
										<li className="list-group-item">Check out my work at <a href="https://github.com/brhestir/">Github</a></li>
										<li className="list-group-item">Connect with me on <a href="https://www.linkedin.com/in/brian-hestir-9743336/">LinkedIn</a></li>
										<li className="list-group-item">Email: <a href="mailto:brhestir@gmail.com">brhestir@gmail.com</a></li>
										<li className="list-group-item">Resume: <a href="https://drive.google.com/file/d/1ksWjp3D2j3AgS3UXsbL9AMS7jhMZAzZd/view?usp=sharing">PDF</a></li>
									</ul>
								</div>
								<div className="card-footer">
									<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	);
};

export default ProfileCard;