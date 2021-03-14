import axios from "axios";
import moment from "moment";
import React, {useEffect, useState} from "react";


const Project = ({ title, image, desc, repoName, repo, site, summary, conceptsAndTech }) => {
  const arrayFoo = new Array(...conceptsAndTech);
	
	const [lastRepoUpdateTime, setLastRepoUpdateTime] = useState(0);

	useEffect( () => {
		axios.get(`https://api.github.com/repos/brhestir/${repoName}/events`).then( (response) => {
			let lastPushTime = response.data[0].created_at;
			let momentizedLastPushTime = moment(lastPushTime);
			setLastRepoUpdateTime(momentizedLastPushTime.startOf('day').fromNow() );
		}).catch((err) => {
			console.log(err);
		});
	}, [repoName]);

	return (
    <>
      <div className="card">
        {/* Card Top */}
				{/* Project Image */}
				<img
          src={image}
          className="card-img-top"
          alt={repoName}
          style={{ height: "300px", objectFit: "cover" }}
        />
				{/* Body of Card */}
        <div className="card-body">
					{/* Project Title*/}
          <h5 className="card-title">{title}</h5>
					{/* Project Summary */}
					<h6><a className="card-link" href="https://en.wiktionary.org/wiki/summa#Latin" style={{ color: "black", textDecoration: "none"}}>S</a>ummary</h6>
					<p className="card-text">{summary}</p>
					{/* Project Description */}
					<h6><a className="card-link" href="https://en.wiktionary.org/wiki/describo#Latin" style={{ color: "black", textDecoration: "none"}}>D</a>escription</h6>
					<p className="card-text">{desc}</p>
					<h6><a className="card-link" href="https://en.wiktionary.org/wiki/concipio#Latin" style={{ color: "black", textDecoration:"none"}}>C</a>oncepts &<br/><a className="card-link" href="https://en.wiktionary.org/wiki/%CF%84%CE%B5%CF%87%CE%BD%CE%BF%CE%BB%CE%BF%CE%B3%CE%AF%CE%B1#Ancient_Greek" style={{ color: "black", textDecoration: "none"}}>T</a>echnologies:</h6>
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
      		<small class="text-muted">Last updated: {lastRepoUpdateTime}</small>
    		</div>
      </div>
    </>
  );
};

export default Project;
