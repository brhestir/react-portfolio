import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer mt-auto py-3 bg-light" style={{position: "fixed", bottom: 0, width: "100%"}}>
        <div class="container">
				<address class="text-muted">
						Copyright &copy; 2021{" "}
						<a href="https://www.linkedin.com/in/brian-hestir-9743336">
							Brian Hestir
						</a>
          </address>
				</div>
      </div>
    </div>
  );
};

export default Footer;
