import React from "react";
import Project from "../../components/Project/Project";
import freshDevPng from "../../assets/images/fresh-dev.png";
import digitalCoffeePng from "../../assets/images/digital-coffee.png";
import myPortfolioPng from "../../assets/images/my-portfolio.png";
import horiseonPng from "../../assets/images/hw1.png";
import codeQuizPng from "../../assets/images/code-quiz.png";
import weatherDashboardPng from "../../assets/images/weather-dashboard.png";
import diamondHandsPng from "../../assets/images/diamond-hands.png";
import readmeGeneratorPng from "../../assets/images/readme-generator.png";

const ProjectsContainer = (props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
				<div className="col">
					<Project
						title="Diamond-Hands"
						image={diamondHandsPng}
						desc="Cloud-based stock trading simulation joining new users with positional expectations and lifetime gains. Written with ❤️ in React."
						repoName="diamond-hands"
						repo="https://github.com/brhestir/diamond-hands"
						site="https://intense-peak-32491.herokuapp.com/"
						summary="Get in on the action in a risk-free arena with Diamond Hands, a paper-trading simulator allowing users to acquire stock, observe performance and project gains prior to realizing positions."
						conceptsAndTech={["react", "express", "mongodb", "eslint", "mongoose", "bcrypt", "materialize-CSS", "stonks"]}
					/>
				</div>
				<div className="col">
					<Project
						title="Fresh-Dev"
						image={freshDevPng}
						desc="Fresh-Dev is a online platform for students to showcase their work and portfolios for recruiters and hiring managers to view and search for base on specific programming languages."
						repoName="fresh-dev"
						repo="https://github.com/brhestir/fresh-dev/"
						site="https://fresh-dev.herokuapp.com/"
						summary="Students can fill out a form with their personal details and elect to display languages known.  Next, others can use a search dialog to return results matching languages elected to be displayed in results."
						conceptsAndTech={["mysql", "express", "handlebars", "materialize-CSS", "networks", "pexels"]}
					/>
				</div>
				<div className="col">
					<Project
						title="Digital Coffee"
						image={digitalCoffeePng}
						desc="This is our first project: Digital Coffee. We utilized HTML, CSS, Bootstrap, FontAwesome, JavaScript, and various different APIs (Listed in README.md) to randomly generate quotes, images, and weather information according to user choice."
						repoName="fresh-dev"
						repo="https://github.com/brhestir/fresh-dev/"
						site="https://brhestir.github.io/digital-coffee/"
						summary="Often, initial conditions can affect the outcome of systems with complex dynamics.  One's day is no different and arguably more complex.  This app helps us generate a calm and positive foundation from which to start one or more of our days."
						conceptsAndTech={["bootstrap", "openweatherapi", "pexels-api"]}
					/>
				</div>
				<div className="col">
					<Project
						title="react-portfolio"
						image={myPortfolioPng}
						desc="A view of some model aspects in React"
						repoName="react-portfolio"
						repo="https://github.com/brhestir/react-portfolio/"
						site="https://brhestir.github.io/react-portfolio/"
						summary="A model aspect presents different views depending on how it is oriented wrt the observer.  This project uses React to generate views of models given a list of pointers to memories."
						conceptsAndTech={["react", "portfolio", "pointers"]}
					/>
				</div>
				<div className="col">
					<Project
						title="Horiseon Refactor"
						image={horiseonPng}
						desc="Horiseon site refactor"
						repoName="horiseon"
						repo="https://github.com/brhestir/horiseon/"
						site="https://brhestir.github.io/horiseon/"
						summary="Refactor SEO agency:  Using a reference example, emulate and streamline the process for oneself and if fortunate, others."
						conceptsAndTech={["css", "web-development", "html5", "accessibility", "seo", "semantic-web"]}
					/>
				</div>
				<div className="col">
					<Project
						title="code-quiz"
						image={codeQuizPng}
						desc="A javascript-based programming knowledge quiz."
						repoName="code-quiz"
						repo="https://github.com/brhestir/code-quiz/"
						site="https://brhestir.github.io/code-quiz/"
						summary="A quick project/tool to help generate reflective questions for review."
						conceptsAndTech={["javascript", "bootstrap", "quiz"]}
					/>
				</div>
				<div className="col">
					<Project
						title="readme-generator"
						image={readmeGeneratorPng}
						desc="Parse, transform & generate README instructions with NodeJS and Markdown"
						repoName="readme-generator"
						repo="https://github.com/brhestir/readme-generator/"
						site="https://brhestir.github.io/readme-generator/"
						summary="This CLI app generates a high-quality README.md composed from user response's to a series of questions common to README.md generation for a new project."
						conceptsAndTech={["inquirer", "markdown", "parser", "compilation"]}
					/>
				</div>
				<div className="col">
					<Project
						title="weather-dashboard"
						image={weatherDashboardPng}
						desc="A weather dashboard using bootstrap and moment.js"
						repoName="fresh-dev"
						repo="https://github.com/brhestir/weather-dashboard/"
						site="https://brhestir.github.io/weather-dashboard/"
						summary="Type in or select a saved city name and recieved a 5-day weather and UV-index forecast."
						conceptsAndTech={["bootstrap, moment.js"]}
					/>
				</div>
			</div>
    </div>
  );
};

export default ProjectsContainer;
