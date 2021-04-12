import React from "react";
import "./footer.css";

const link_email = "mailto:brhestir@gmail.com";
const link_GitHub = "https://github.com/brhestir";
const link_LinkedIn = "https://www.linkedin.com/in/brian-hestir-9743336";
const link_resumePDF = "https://drive.google.com/file/d/1-GNCMynrWPrQnThQWwygVvBBUVlzUMRr/view?usp=sharing";


const Footer = () => {
  return (
    <div>
      <div className="footer mt-auto py-3 bg-light" style={{position: "fixed", bottom: 0, height: "60px", width: "100%"}}>
        <div className="container">
				<address className="text-muted">
						Copyright &copy; 2021{" "}Brian Hestir
						<span className="socialIcon"> <a href={link_resumePDF} rel="noreferrer" target="_blank"><i className="fa fa-file-o fa-2x ml-2 mr-2" aria-label="Resume Icon"></i></a> </span>
						<span className="socialIcon"> <a href={link_email} rel="noreferrer" target="_blank"><i className="fa fa-envelope-o fa-2x ml-2 mr-2" aria-label="Email Icon"></i></a> </span>
						<span className="socialIcon"> <a href={link_LinkedIn} rel="noreferrer" target="_blank"><i className="fa fa-linkedin fa-2x ml-2 mr-2" aria-label="LinkedIn Icon"></i></a> </span>
						<span className="socialIcon"> <a href={link_GitHub} rel="noreferrer" target="_blank"><i className="fa fa-github fa-2x ml-2 mr-2" aria-label="GitHub Icon"></i></a> </span>
					</address>
				</div>
      </div>
    </div>
  );
};

export default Footer;
