import React from "react";
import Ok from "./icons/Ok";
const Submit = ({ selections, currentAttempt, handleSubmit }) => {
	return (
		<div className="Submitbtn">
			<button
				type="button"
				className="btn btn-submit"
				onClick={() => handleSubmit(selections, currentAttempt)}>
				<Ok />
			</button>
		</div>
	);
};

export default Submit;
