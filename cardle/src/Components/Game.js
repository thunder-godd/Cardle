import React from "react";
import { useState, useEffect } from "react";
import CARS from "utilities/cars";
import randomizer from "utilities/randomizer";
import Board from "./Board";
import GameOver from "./GameOver";
import Options from "./Options";
import StatBar from "./StatBar";
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
	const [attempts, setAttempts] = useState([0, 1, 2]);
	const [fuel, setFuel] = useState([0, 1, 2]);
	const [currentAttempt, setCurrentAttempt] = useState(0);
	const [attributes] = useState(["Color", "Body", "Engine"]);
	const [currentAttribute, setCurrentAttribute] = useState();
	const [options, setOptions] = useState(["", "", ""]);
	const [status] = useState(["Attempts", "Correct"]);
	const [win, setWin] = useState(false);
	const [targets, setTargets] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const [checks, setChecks] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const [selections, setSelections] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const startGame = () => {
		setCurrentAttempt(0);
		setCar(randomizer(CARS));
		setChecks([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
		setSelections([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
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
			} else {
				console.log(`${selection[i]}  is wrong`);
				setChecks((prevState) => {
					prevState[currentAttempt][i] = false;
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
	const disableAttempt = () => {
		for (let i = 0; i < 3; i++) {
			targets[currentAttempt][i].disabled = true;
		}
	};
	const handleClick = (target, attempt_id, attr_id) => {
		let myOptions = mapOptions(attr_id);
		setOptions(myOptions);
		setCurrentAttempt(attempt_id);
		setCurrentAttribute(attr_id);
		setTargets((prevState) => {
			prevState[attempt_id][attr_id] = target;
			return [...prevState];
		});
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
		disableAttempt();
		setFuel(fuel.pop());
	};
	return (
		<div className="Game" id="Game">
			<StatBar status={status} />

			{win || fuel.length < 1 ? <GameOver /> : ""}

			<Board
				attempts={attempts}
				attributes={attributes}
				handleClick={handleClick}
				selections={selections}
				checks={checks}
			/>

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
