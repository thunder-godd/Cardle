import React from "react";

const Option = ({
	id,
	option,
	selectOption,
	currentAttempt,
	currentAttribute,
}) => {
	return (
		<div className="option">
			<button
				id={id}
				type="button"
				className="btn btn-secondary"
				onClick={() => selectOption(currentAttempt, currentAttribute, option)}>
				{option}
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
	return (
		<div className="Options">
			{options.map((option, id) => (
				<Option
					key={id}
					id={id}
					option={option}
					selectOption={selectOption}
					currentAttempt={currentAttempt}
					currentAttribute={currentAttribute}
				/>
			))}
		</div>
	);
};

export default Options;
