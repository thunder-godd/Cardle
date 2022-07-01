import React from "react";

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
				<button className="navbar-toggler" onClick={(e) => toggle()}>
					<span className="navbar-toggler-icon"></span>
				</button>
			</nav>
		</div>
	);
};

export default Gamebar;
