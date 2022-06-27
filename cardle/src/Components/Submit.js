import React from "react";

const Submit = ({ selections, currentAttempt, handleSubmit }) => {
	return (
		<div className="Submitbtn">
			<button
				type="button"
				className="btn btn-secondary"
				onClick={() => handleSubmit(selections, currentAttempt)}>
				OK
			</button>
		</div>
	);
};

export default Submit;
