import React from "react";

const Attribute = ({
	attribute,
	attr_id,
	attempt_id,
	handleClick,
	selections,
	checks,
}) => {
	let selection = selections[attempt_id][attr_id];
	let check = checks[attempt_id][attr_id];
	return (
		<div className="Attribute">
			<button
				className="btn btn-secondary"
				onClick={(e) => handleClick(e.target, attempt_id, attr_id)}>
				{selection !== "" ? selection : attribute}
			</button>
			<Check check={check} />
		</div>
	);
};

const Attempt = ({
	attempt_id,
	attributes,
	handleClick,
	selections,
	checks,
}) => {
	return (
		<div className="Attempt" id={attempt_id}>
			{attributes.map((attribute, id) => {
				return (
					<Attribute
						key={id}
						attr_id={id}
						attempt_id={attempt_id}
						attribute={attribute}
						handleClick={handleClick}
						selections={selections}
						checks={checks}
					/>
				);
			})}
		</div>
	);
};
const Check = ({ check }) => {
	console.log(check);
	return <div>{check ? "T" : "F"}</div>;
};
const Board = ({ attempts, attributes, handleClick, selections, checks }) => {
	return (
		<div className="Board">
			{attempts.map((attempt, id) => {
				return (
					<Attempt
						key={id}
						attempt_id={attempt}
						attributes={attributes}
						handleClick={handleClick}
						selections={selections}
						checks={checks}
					/>
				);
			})}
		</div>
	);
};
export default Board;
