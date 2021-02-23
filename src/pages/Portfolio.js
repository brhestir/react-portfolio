import React from 'react';
import Project from "../components/Project/Project";
import freshDevPng from "../assets/images/fresh-dev.png";
import digitalCoffeePng from "../assets/images/digital-coffee.png";
import myPortfolioPng from "../assets/images/my-portfolio.png";
import horiseonPng from "../assets/images/hw1.png";
import codeQuizPng from "../assets/images/code-quiz.png";
import weatherDashboardPng from "../assets/images/weather-dashboard.png";

const Portfolio = () => {
	return (
		<div>
			<h2 className="text-center m-3">Portfolio</h2>
			
			<div className="row m-3">
				<div className="col-4">
					<Project
						title="Fresh-Dev"
						image={freshDevPng}
						desc="Fresh-Dev is a online platform for students to showcase their work and portfolios for recruiters and hiring managers to view and search for base on specific programming languages."
						repoName="fresh-dev"
						repo="https://github.com/brhestir/fresh-dev/"
						site="https://fresh-dev.herokuapp.com/"
					/>
				</div>
				<div className="col-4">
					<Project
						title="Digital Coffee"
						image={digitalCoffeePng}
						desc="This is our first project: Digital Coffee. We utilized HTML, CSS, Bootstrap, FontAwesome, JavaScript, and various different APIs (Listed in README.md) to randomly generate quotes, images, and weather information according to user choice."
						repoName="fresh-dev"
						repo="https://github.com/brhestir/fresh-dev/"
						site="https://brhestir.github.io/digital-coffee/"
					/>
				</div>
			</div>

			<div className="row m-3">
				<div className="col-4">
					<Project
						title="My Portfolio"
						image={myPortfolioPng}
						desc="A place to share projects (Pre-react version)"
						repoName="my-portfolio"
						repo="https://github.com/brhestir/my-portfolio/"
						site="https://brhestir.github.io/my-portfolio/"
					/>
				</div>
				<div className="col-4">
					<Project
						title="Horiseon Refactor"
						image={horiseonPng}
						desc="Horiseon site refactor"
						repoName="horiseon"
						repo="https://github.com/brhestir/horiseon/"
						site="https://brhestir.github.io/horiseon/"
					/>
				</div>
			</div>

			<div className="row m-3">
				<div className="col-4">
					<Project
						title="code-quiz"
						image={codeQuizPng}
						desc="A javascript-based programming knowledge quiz."
						repoName="code-quiz"
						repo="https://github.com/brhestir/code-quiz/"
						site="https://brhestir.github.io/code-quiz/"
					/>
				</div>
				<div className="col-4">
					<Project
						title="weather-dashboard"
						image={weatherDashboardPng}
						desc="A weather dashboard using bootstrap and moment.js"
						repoName="fresh-dev"
						repo="https://github.com/brhestir/weather-dashboard/"
						site="https://brhestir.github.io/weather-dashboard/"
					/>
				</div>
			</div>
			
			
			
		</div>
	);
};

export default Portfolio;