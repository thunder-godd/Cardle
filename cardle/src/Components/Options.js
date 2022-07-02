import React from "react";

const Bttn = ({
	id,
	Option,
	selectOption,
	currentAttempt,
	currentAttribute,
}) => {
	return (
		<div className="option">
			<button
				id={id}
				type="button"
				className="btn"
				onClick={() => selectOption(currentAttempt, currentAttribute, Option)}>
				<Option />
			</button>
		</div>
	);
};

const Options = ({
	currentAttempt,
	currentAttribute,
	options,
	selectOption,
}) => {
	//console.log(options);
	return (
		<div className="Options">
			{options.map((Option, index) => {
				return (
					<Bttn
						key={index}
						id={index}
						Option={Option}
						currentAttempt={currentAttempt}
						currentAttribute={currentAttribute}
						selectOption={selectOption}
					/>
				);
			})}
		</div>
	);
};

export default Options;
