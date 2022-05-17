import React from "react";

const Gamebar = () => {
	return (
		<div className="GameBar">
			<nav className="navbar  navbar-dark bg-dark ">
				<div className="container-sm">
					<a className="navbar-brand" href="/">
						Cardle
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			<hr />
		</div>
	);
};

export default Gamebar;
