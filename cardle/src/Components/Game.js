import React from "react";
import { useState, useEffect } from "react";

const Attribute = ({ attempt_id, id, attribute, handleClick, selections }) => {
	//console.log("line6", selections);
	//console.log("line7", id, attribute);
	let attr_id = `${attempt_id}` + `${id}`;
	console.log("line7", attempt_id, id, attr_id);
	let selection = selections[id];
	return (
		<div className="Attribute">
			<button
				id={attr_id}
				type="button"
				className="btn btn-secondary"
				onClick={(e) => handleClick(e, attribute, attr_id)}>
				{selection ? selection : attribute}
			</button>
		</div>
	);
};

const Attempt = ({ id, attributes, handleClick, selections }) => {
	let attempt_id = id;
	return (
		<div className="Attempt ">
			{attributes.map((attribute, id) => (
				<Attribute
					key={id}
					id={id}
					attempt_id={attempt_id}
					attribute={attribute}
					handleClick={handleClick}
					selections={selections}
				/>
			))}
		</div>
	);
};
const Attempts = ({ attempts, attributes, handleClick, selections }) => {
	//console.log("line38", selections);
	return (
		<div className="Attempts">
			{attempts.map((attempt, id) => (
				<Attempt
					key={id}
					id={id}
					attempts={attempt}
					attributes={attributes}
					handleClick={handleClick}
					selections={selections}
				/>
			))}
		</div>
	);
};
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
const Option = ({ id, option, selectOption }) => {
	console.log("line68", option, id);
	return (
		<div className="option">
			<button
				id={id}
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
				<Option key={id} id={id} option={option} selectOption={selectOption} />
			))}
		</div>
	);
};
const Submitbtn = ({ handleSubmit }) => {
	return (
		<div className="Submitbtn">
			<button
				type="button"
				className="btn btn-secondary"
				onClick={(e) => handleSubmit(e)}>
				OK
			</button>
		</div>
	);
};
const Game = () => {
	const [attempts, setAttempts] = useState([0, 1, 2, 3]);
	const [options, setOptions] = useState([0, 1, 2]);
	const [attributes, setAttributes] = useState(["C", "M", "E"]);
	const [status, setStatus] = useState(["C", "M", "E", "E"]);
	const [selections, setSelections] = useState([]);

	const handleClick = (e, attribute, id) => {
		let myOptions = mapOptions(attribute);
		setOptions(myOptions);
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
	const selectOption = (e, option, id) => {
		let myOpt = option;
		//e.target.value = myOpt;
		//let id = e.target.id;
		setSelections((prevState) => {
			prevState[id] = myOpt;
			console.log("line138", selections);
			return [...prevState[id]];
		});
		console.log(myOpt);
		console.log(selections);
	};

	const handleSubmit = (e) => {
		console.log(selections);
	};
	return (
		<div className="container-sm Game">
			<div className="rows">
				<Attempts
					attempts={attempts}
					attributes={attributes}
					handleClick={handleClick}
					selections={selections}
				/>
				<StatusBar status={status} attempts={attempts} />
			</div>
			<div className="rows">
				<Options options={options} selectOption={selectOption} />
				<Submitbtn handleSubmit={handleSubmit} />
			</div>

			<hr />
		</div>
	);
};

export default Game;
