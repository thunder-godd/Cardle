import React from "react";
import { useState } from "react";

const Attribute = ({
	attribute,
	attr_id,
	attempt_id,
	handleClick,
	selections,
}) => {
	let selection = selections[attempt_id][attr_id];
	return (
		<div className="Attribute">
			<button
				className="btn btn-secondary"
				onClick={() => handleClick(attempt_id, attr_id)}>
				{selection !== "" ? selection : attribute}
			</button>
		</div>
	);
};
const Attempt = ({ attempt_id, attributes, handleClick, selections }) => {
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
					/>
				);
			})}
		</div>
	);
};
const Board = ({ attempts, attributes, handleClick, selections }) => {
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
					/>
				);
			})}
		</div>
	);
};
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
const Status = ({ stat }) => {
	return <div className="status">{stat}: 4</div>;
};
const Statusbar = ({ status, attempts }) => {
	return (
		<div className="StatusBar">
			{status.map((stat, id) => (
				<Status key={id} stat={stat} attempts={attempts} />
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
	const [attempts, setAttempts] = useState([0]);
	const [currentAttempt, setCurrentAttempt] = useState();
	const [attributes] = useState(["C", "M", "E"]);
	const [currentAttribute, setCurrentAttribute] = useState();
	const [options, setOptions] = useState([0, 1, 2]);
	const [status, setStatus] = useState(["C", "M", "E", "E"]);
	const [selections, setSelections] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);

	const handleClick = (attempt_id, attr_id) => {
		let myOptions = mapOptions(attr_id);
		setOptions(myOptions);
		setCurrentAttempt(attempt_id);
		setCurrentAttribute(attr_id);
	};
	const mapOptions = (attr_id) => {
		const attrOpt = {
			color: ["R", "B", "G"],
			Model: ["M", "T", "S"],
			Engine: ["E", "D", "P"],
		};
		let opt;
		switch (attr_id) {
			case 0:
				opt = attrOpt.color;
				break;
			case 1:
				opt = attrOpt.Model;
				break;
			case 2:
				opt = attrOpt.Engine;
				break;
			default:
				break;
		}
		return opt;
	};
	const selectOption = (currentAttempt, currentAttribute, option) => {
		setSelections((prevState) => {
			prevState[currentAttempt][currentAttribute] = option;
			return [...prevState];
		});
		// console.log(selections);
		// console.log(currentAttempt);
		// console.log(currentAttribute);
		// console.log(option);
	};
	const handleSubmit = () => {
		//run checker
		//display results
		//update attempts
		//make prev attempt uneditable
	};
	return (
		<div className="Game" id="Game">
			<div className="row">
				<Board
					attempts={attempts}
					attributes={attributes}
					handleClick={handleClick}
					selections={selections}
				/>
				<Statusbar status={status} />
			</div>
			<div className="row">
				<Options
					options={options}
					selectOption={selectOption}
					currentAttempt={currentAttempt}
					currentAttribute={currentAttribute}
				/>
				<Submitbtn
					selections={selections}
					attempts={attempts}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
};
export default Game;
