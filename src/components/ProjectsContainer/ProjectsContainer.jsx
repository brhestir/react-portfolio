import React from "react";
import Project from "../../components/Project/Project";
import freshDevPng from "../../assets/images/fresh-dev.png";
import digitalCoffeePng from "../../assets/images/digital-coffee.png";
import myPortfolioPng from "../../assets/images/my-portfolio.png";
import horiseonPng from "../../assets/images/hw1.png";
import GBSearchPng from "../../assets/images/GBSearch.png";
import diamondHandsPng from "../../assets/images/diamond-hands.png";
import readmeGeneratorPng from "../../assets/images/readme-generator.png";
import fitnessAdvisorPng from "../../assets/images/fitness-advisor.png";
import cloudBurgerPng from "../../assets/images/cloud-burger.png";

const ProjectsContainer = (props) => {
  return (
    <div>
			<div className="card-group">
				<Project
						title="Diamond-Hands"
						image={diamondHandsPng}
						desc="Cloud-based stock trading simulation joining new users with positional expectations and lifetime gains. Written with ❤️ in React."
						repoName="diamond-hands"
						repo="https://github.com/brhestir/diamond-hands/"
						site="https://intense-peak-32491.herokuapp.com/"
						summary="Get in on the action in a risk-free arena with Diamond Hands, a paper-trading simulator allowing users to acquire stock, observe performance and project gains prior to realizing positions."
						conceptsAndTech={["react", "express", "mongodb", "eslint", "mongoose", "bcrypt", "materialize-CSS", "stonks"]}
				/>
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
				<Project
					title="Digital Coffee"
					image={digitalCoffeePng}
					desc="This is our first project: Digital Coffee. We utilized HTML, CSS, Bootstrap, FontAwesome, JavaScript, and various different APIs (Listed in README.md) to randomly generate quotes, images, and weather information according to user choice."
					repoName="fresh-dev"
					repo="https://github.com/brhestir/digital-coffee/"
					site="https://brhestir.github.io/digital-coffee/"
					summary="Often, initial conditions can affect the outcome of systems with complex dynamics.  One's day is no different and arguably more complex.  This app helps us generate a calm and positive foundation from which to start one or more of our days."
					conceptsAndTech={["bootstrap", "initialization", "humor", "openweatherapi", "pexels-api"]}
				/>
			</div>
			<br/>
			
			<div className="card-group">
				<Project
					title="react-portfolio"
					image={myPortfolioPng}
					desc="A view of some model aspects in React"
					repoName="react-portfolio"
					repo="https://github.com/brhestir/react-portfolio/"
					site="https://brhestir.github.io/react-portfolio/"
					summary="A model aspect presents different views depending on how it is oriented wrt the observer.  This project uses React to generate views of models given a list of pointers to memories."
					conceptsAndTech={["react", "portfolio", "pointers", "summary", "concepts", "technology"]}
				/>
				<Project
					title="GBSearch"
					image={GBSearchPng}
					desc="Search within Google Books for matching items. Publish interesting results for later research, notifying subscribed peers via SocketIO. Hastily composed with React."
					repoName="fresh-dev"
					repo="https://github.com/brhestir/GBSearch/"
					site="https://still-shore-47010.herokuapp.com/search/"
					summary="Type in a search term and recieve list of matching books for later research"
					conceptsAndTech={["search", "algorithm", "research", "stretch", "api", "google"]}
				/>
				<Project
					title="readme-generator"
					image={readmeGeneratorPng}
					desc="Parse, transform & generate README instructions with NodeJS and Markdown"
					repoName="readme-generator"
					repo="https://github.com/brhestir/readme-generator/"
					site="https://brhestir.github.io/readme-generator/"
					summary="This CLI app generates a high-quality README.md composed from user response's to a series of questions common to README.md generation for a new project."
					conceptsAndTech={["inquirer", "markdown", "parser", "compilation", "representation"]}
				/>
			</div>
			<br/>
			
			<div className="card-group">
				<Project
					title="fitness-advisor"
					image={fitnessAdvisorPng}
					desc="Fitness Advisor is a cloud-based application allowing one to track: both resistance and cardio-based workouts, the duration of each exercise, the number of sets and repetitions performed, as well as weight lifted and / or distance covered for each activity."
					repoName="fitness-advisor"
					repo="https://github.com/brhestir/fitness-advisor/"
					site="https://brhestir.github.io/fitness-advisor/"
					summary="Fitness Advisor is a cloud-based application allowing one to track weekly workout activity and view summary charts generated with Chart.js"
					conceptsAndTech={["semantic", "express", "canvas", "mongodb", "mongoose", "chartjs"]}
				/>
				<Project
					title="cloud-burger"
					image={cloudBurgerPng}
					desc="Cloud Burger allows one to instantiate new burger types, push them to a stack and / or pop them out to consumers; with state persisted in the cloud."
					repoName="cloud-burger"
					repo="https://github.com/brhestir/cloud-burger/"
					site="https://pure-tor-88060.herokuapp.com/"
					summary="Create, persist, refine and consume tasty burger objects in the cloud."
					conceptsAndTech={["deployment", "sql", "handlebars", "sequelize", "pexels"]}
				/>
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
			<br/>
			
    </div>
  );
};

export default ProjectsContainer;
