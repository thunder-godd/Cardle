import React, { useCallback, useEffect, useState } from "react";
import Lives from "./icons/Lives";
import Station from "./icons/Station";
import Trophy from "./icons/Trophy";
// const Fuel = () => {
// 	return (
// 		<div className="lives">
// 			<Lives />
// 		</div>
// 	);
// };
const Wins = ({ wins }) => {
	return (
		<div className="status">
			<div className="wins">
				<Trophy />:{wins}
			</div>
		</div>
	);
};
const StatBar = ({ wins, count }) => {
	const [fuel, setFuel] = useState([Lives, Lives, Lives]);

	const changeFuel = useCallback(() => {
		setFuel((prevState) => prevState.filter((v, index) => index === count));
	}, [count]);
	useEffect(() => {
		changeFuel();
	}, [count, changeFuel]);
	return (
		<div className="StatBar">
			<div className="status">
				<Station />:
				{fuel.map((life, id) => (
					<Lives key={id} />
				))}
				{/* {count} */}
			</div>

			<Wins wins={wins} />
		</div>
	);
};

export default StatBar;
