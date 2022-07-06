import React from "react";
import how from "./images/how.png";
const Gamebar = () => {
	const toggle = () => {
		//console.log("toggled");
	};
	return (
		<div className="GameBar">
			<nav className="navbar ">
				<span className="logo" href="/">
					Cardle
				</span>
				<button className="how" onClick={(e) => toggle()}>
					<img src={how} alt="question mark" />
				</button>
			</nav>
		</div>
	);
};

export default Gamebar;
