import React from "react";

const Attribute = ({
	attribute,
	attr_id,
	attempt_id,
	handleClick,
	selections,
	check,
}) => {
	let selection = selections[attempt_id][attr_id];
	return (
		<div className="Attribute">
			<button
				className="btn btn-secondary"
				onClick={() => handleClick(attempt_id, attr_id)}>
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
	check,
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
						check={check}
					/>
				);
			})}
		</div>
	);
};
const Check = (check) => {
	// console.log(check);
	return <div>{check ? "F" : "T"}</div>;
};
const Board = ({ attempts, attributes, handleClick, selections, check }) => {
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
						check={check}
					/>
				);
			})}
		</div>
	);
};
export default Board;
