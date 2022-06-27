import React from "react";

const Status = ({ stat }) => {
	return <div className="status">{stat}: 4</div>;
};
const StatusBar = ({ status, attempts }) => {
	return (
		<div className="StatusBar">
			{status.map((stat, id) => (
				<Status key={id} stat={stat} attempts={attempts} />
			))}
		</div>
	);
};

export default StatusBar;
