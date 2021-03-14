import React from 'react';
import ProjectsContainer from "../components/ProjectsContainer/ProjectsContainer"

const Portfolio = () => {
	return (
		<div>
			<h2 className="text-center m-3"><a className="card-link" href="https://en.wiktionary.org/wiki/portfolio">P</a>ortfolio</h2>
			<div className="container">
				<ProjectsContainer />
			</div>
		</div>
	);
};

export default Portfolio;