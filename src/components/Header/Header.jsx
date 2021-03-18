import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body" style={{position: "fixed", top: "0px", width: "100%", zIndex: 1}}>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">Portfolio</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item ms-auto">
								<Link
									to="/aboutme"
									className= {
										window.location.pathname === "/" ||
										window.location.pathname === "/aboutme"
											? "nav-link active"
											: "nav-link"
									}
									data-toggle="collapse"
									data-target="#navbarContent"
								>
									Brian Hestir
								</Link>
							</li>
							<li className="nav-item ms-auto">
								<Link
									to="/portfolio"
									className={
										window.location.pathname === "/portfolio"
											? "nav-link active"
											: "nav-link"
									}
								>
									Portfolio
								</Link>
							</li>
							<li className="nav-item ms-auto">
								<Link
									to="/contact"
									className={
										window.location.pathname === "/contact"
											? "nav-link active"
											: "nav-link"
									}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
      </nav>
    </div>
  );
};

export default Header;
