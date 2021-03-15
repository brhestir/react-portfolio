import React from 'react';
import ProfileCard from "../components/ProfileCard/ProfileCard"


const Home = () => {
	return (
		<>
			<div className="container" style={{position: "relative", top: "75px"}}>
				<ProfileCard />
			</div>
		</>
	);
};

export default Home;