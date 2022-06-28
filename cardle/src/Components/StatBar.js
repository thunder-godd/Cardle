import React from "react";

const Status = ({ stat }) => {
	return <div className="status">{stat}: 4</div>;
};
const StatBar = ({ status, attempts }) => {
	return (
		<div className="StatBar">
			{status.map((stat, id) => (
				<Status key={id} stat={stat} attempts={attempts} />
			))}
		</div>
	);
};

export default StatBar;
