import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer mt-auto py-3 bg-light" style={{position: "fixed", bottom: 0, height: "60px", width: "100%"}}>
        <div className="container">
				<address className="text-muted">
						Copyright &copy; 2021{" "}Brian Hestir
						<span> <a href="https://github.com/brhestir" rel="noreferrer" target="_blank"><i className="fa fa-github fa-lg" aria-label="GitHub Icon"></i></a> </span>
						<span> <a href="https://www.linkedin.com/in/brian-hestir-9743336" rel="noreferrer" target="_blank"><i className="fa fa-linkedin fa-lg" aria-label="LinkedIn Icon"></i></a> </span>
						<span> <a href="mailto:brhestir@gmail.com" rel="noreferrer" target="_blank"><i className="fa fa-envelope-o fa-lg" aria-label="Email Icon"></i></a> </span>
						<span> <a href="https://drive.google.com/file/d/1ksWjp3D2j3AgS3UXsbL9AMS7jhMZAzZd/view?usp=sharing" rel="noreferrer" target="_blank"><i className="fa fa-file-o fa-lg" aria-label="Resume Icon"></i></a> </span>
					</address>
				</div>
      </div>
    </div>
  );
};

export default Footer;
