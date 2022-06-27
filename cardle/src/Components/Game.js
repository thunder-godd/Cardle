import React from "react";
import { useState, useEffect } from "react";
import CARS from "utilities/cars";
import randomizer from "utilities/randomizer";
import Board from "./Board";
import Options from "./Options";
import StatusBar from "./StatusBar";
import Submit from "./Submit";

const newCar = randomizer(CARS);

const Start = ({ startGame }) => {
	return (
		<div>
			<button onClick={() => startGame()}>START</button>
		</div>
	);
};

const Game = () => {
	const [car, setCar] = useState(newCar);
	const [attempts, setAttempts] = useState([0]);
	const [currentAttempt, setCurrentAttempt] = useState(0);
	const [attributes] = useState(["Color", "Body", "Engine"]);
	const [currentAttribute, setCurrentAttribute] = useState();
	const [options, setOptions] = useState([0, 1, 2]);
	const [status] = useState(["Attempts", "Correct"]);
	const [win, setWin] = useState(false);
	const [checks, setChecks] = useState([
		[false, false, false],
		[false, false, false],
		[false, false, false],
	]);
	const [selections, setSelections] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const startGame = () => {
		setCurrentAttempt(0);
		setCar(randomizer(CARS));
	};
	console.log(car);
	const checker = (selection, currentAttempt) => {
		//console.log(selection);
		for (let i = 0; i < selection.length; i++) {
			if (selection[i] === car[i]) {
				console.log(`${selection[i]}  is correct`);
				setChecks((prevState) => {
					prevState[currentAttempt][i] = true;
					return [...prevState];
				});
			}
		}
	};
	useEffect(() => {
		console.log(checks);
		checkWin();
	});
	const checkWin = () => {
		console.log(win, currentAttempt);
		console.log(checks[currentAttempt]);
		checks[currentAttempt][0] &&
			checks[currentAttempt][1] &&
			checks[currentAttempt][2] &&
			setWin(true);
		console.log(win, "you win");
	};

	const handleClick = (attempt_id, attr_id) => {
		let myOptions = mapOptions(attr_id);
		setOptions(myOptions);
		setCurrentAttempt(attempt_id);
		setCurrentAttribute(attr_id);
	};
	const mapOptions = (attr_id) => {
		const attrOpt = {
			Color: ["Red", "Blue", "Black"],
			Body: ["Sedan", "Truck", "SUV"],
			Engine: ["Petrol", "Electric", "Hybrid"],
		};
		let opt;
		switch (attr_id) {
			case 0:
				opt = attrOpt.Color;
				break;
			case 1:
				opt = attrOpt.Body;
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
	const handleSubmit = (selections, currentAttempt) => {
		const selection = selections[currentAttempt];
		//run checker
		//display results
		//update attempts
		//make prev attempt uneditable
		// console.log(selections, currentAttempt);
		// console.log(selection);
		checker(selection, currentAttempt);
	};
	return (
		<div className="Game" id="Game">
			<StatusBar status={status} />
			<div className="row">
				<Board
					attempts={attempts}
					attributes={attributes}
					handleClick={handleClick}
					selections={selections}
					checks={checks}
				/>
			</div>
			<div className="row">
				<Options
					options={options}
					selectOption={selectOption}
					currentAttempt={currentAttempt}
					currentAttribute={currentAttribute}
				/>
				<Submit
					selections={selections}
					currentAttempt={currentAttempt}
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className="row">
				<Start startGame={startGame} />
			</div>
		</div>
	);
};

export default Game;
