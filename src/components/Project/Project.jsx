import React from "react";

const Project = ({ title, image, desc, repoName, repo, site, summary, conceptsAndTech }) => {
  const arrayFoo = new Array(...conceptsAndTech);
	
	return (
    <>
      <div className="card">
        {/* Card Top */}
				{/* Project Image */}
				<img
          src={image}
          className="card-img-top"
          alt={repoName}
          style={{ width: "400px", height: "300px" }}
        />
				{/* Body of Card */}
        <div className="card-body">
					{/* Project Title*/}
          <h5 className="card-title">{title}</h5>
					{/* Project Summary */}
					<h6><a className="card-link" href="https://en.wiktionary.org/wiki/summa#Latin">S</a>ummary</h6>
					<p className="card-text">{summary}</p>
					{/* Project Description */}
					<h6><a className="card-link" href="https://en.wiktionary.org/wiki/describo#Latin">D</a>escription</h6>
					<p className="card-text">{desc}</p>
					<h6>Concepts & Technologies:</h6>
					{/* Badges */}
					<p className="card-text">
						{ arrayFoo.map( (cV) => {
							return (<a href={`https://github.com/topics/${cV}`} class="badge badge-pill badge-primary">{cV}+{" "}</a>);
						})}
					</p>
					<h6 className="card-subtitle">
						GitHub Repo: <a className="card-link" href={repo}>{repoName}</a>
					</h6>
					<br/>
          <h6 className="card-subtitle">
            Deployed Site: <a className="card-link" href={site}>{site}</a>
          </h6>
        </div>
				<div class="card-footer">
      		<small class="text-muted">Last updated 3 mins ago</small>
    		</div>
      </div>
    </>
  );
};

export default Project;
