import React from "react";
import Lives from "./icons/Lives";
import Station from "./icons/Station";
import Trophy from "./icons/Trophy";
const Fuel = () => {
	return (
		<div className="lives">
			<Lives />
		</div>
	);
};
const Wins = ({ wins }) => {
	return (
		<div className="status">
			<div className="wins">
				<Trophy />:{wins}
			</div>
		</div>
	);
};
const StatBar = ({ fuel, wins }) => {
	return (
		<div className="StatBar">
			<div className="status">
				<Station />:
				{fuel.map((fuel, id) => (
					<Fuel key={id} fuel={fuel} />
				))}
			</div>

			<Wins wins={wins} />
		</div>
	);
};

export default StatBar;
