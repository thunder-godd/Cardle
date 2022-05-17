import React from "react";
import { useState, useEffect } from "react";

const Attribute = ({ attribute, handleClick }) => {
	return (
		<div className="Attribute">
			<button
				type="button"
				className="btn btn-secondary"
				onClick={(e) => handleClick(e, attribute)}>
				{attribute}
			</button>
		</div>
	);
};

const Attempt = ({ attributes, handleClick }) => {
	return (
		<div className="Attempt ">
			{attributes.map((attribute, id) => (
				<Attribute key={id} attribute={attribute} handleClick={handleClick} />
			))}
		</div>
	);
};
const Status = ({ stat }) => {
	return <div className="status">{stat}: 4</div>;
};
const Option = ({ option, selectOption }) => {
	return (
		<div className="option">
			<button
				type="button"
				className="btn btn-secondary"
				onClick={(e) => selectOption(e, option)}>
				{option}
			</button>
		</div>
	);
};
const Options = ({ options, selectOption }) => {
	return (
		<div className="Options">
			{options.map((option, id) => (
				<Option key={id} option={option} selectOption={selectOption} />
			))}
		</div>
	);
};

const Game = () => {
	const [attempts, setAttempts] = useState([0, 1, 2, 3]);
	const [options, setOptions] = useState([0, 1, 2, 4]);
	const [attributes, setAttributes] = useState(["C", "M", "E"]);
	const [status, setStatus] = useState(["C", "M", "E", "E"]);
	const [selections, setSelections] = useState([]);

	const handleClick = (e, attribute) => {
		console.log(e.target.value, attribute);
		let myOptions = mapOptions(attribute);
		setOptions(myOptions);
	};

	const selectOption = (e, option) => {
		let myOpt = option;
		e.target.value = myOpt;
		console.log(myOpt);
	};

	const mapOptions = (attribute) => {
		const attrOpt = {
			color: ["R", "B", "G"],
			Model: ["M", "T", "S"],
			Engine: ["E", "D", "P"],
		};

		let opt;
		switch (attribute) {
			case "C":
				opt = attrOpt.color;
				break;
			case "M":
				opt = attrOpt.Model;
				break;
			case "E":
				opt = attrOpt.Engine;
				break;
			default:
				break;
		}

		return opt;
	};
	return (
		<div className="container-sm Game">
			<div className="first">
				<div className="Attempts">
					{attempts.map((attempt, id) => (
						<Attempt
							key={id}
							attempts={attempt}
							attributes={attributes}
							handleClick={handleClick}
						/>
					))}
				</div>
				<div className="StatusBar">
					{status.map((stat, id) => (
						<Status
							key={id}
							stat={stat}
							attempts={attempts}
							attributes={attributes}
						/>
					))}
				</div>
			</div>
			<Options options={options} selectOption={selectOption} />
			<hr />
		</div>
	);
};

export default Game;
