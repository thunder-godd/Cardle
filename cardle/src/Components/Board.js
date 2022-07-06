import React from "react";
import Correct from "./icons/Correct";
import Wrong from "./icons/Wrong";
const Btn = ({
	Attribute,
	attr_id,
	attempt_id,
	handleClick,
	selections,
	checks,
}) => {
	let Selection = selections[attempt_id][attr_id];
	let check = checks[attempt_id][attr_id];

	return (
		<div className="Attribute" id={attr_id}>
			<button
				className="btn btn-secondary"
				onClick={() => handleClick(attempt_id, attr_id)}>
				{Selection !== "" ? <Selection /> : <Attribute />}
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
	active,
	gameover,
}) => {
	let isActive = active[attempt_id];

	// gameover() ? (isActive = false) : (isActive = true);

	return (
		<div className={isActive ? null : "disabled"}>
			<div className="Attempt" id={attempt_id}>
				{attributes.map((Attribute, id) => {
					return (
						<Btn
							key={id}
							attr_id={id}
							attempt_id={attempt_id}
							Attribute={Attribute}
							handleClick={handleClick}
							selections={selections}
							checks={checks}
						/>
					);
				})}
			</div>
		</div>
	);
};
const Check = ({ check }) => {
	//console.log(check);
	return (
		<div className="Check">
			{(() => {
				if (check === "") {
					return <div className="empty"></div>;
				} else if (check === true) {
					return <Correct />;
				} else {
					return <Wrong />;
				}
			})()}
		</div>
	);
};
const Board = ({
	attempts,
	attributes,
	handleClick,
	selections,
	checks,
	active,
	gameover,
}) => {
	return (
		<div
			className="Board"
			style={gameover() ? { opacity: 0.25 } : { opacity: 1 }}>
			{attempts.map((attempt, id) => {
				return (
					<Attempt
						key={id}
						attempt_id={attempt}
						attributes={attributes}
						handleClick={handleClick}
						selections={selections}
						checks={checks}
						active={active}
						gameover={gameover}
					/>
				);
			})}
		</div>
	);
};
export default Board;
