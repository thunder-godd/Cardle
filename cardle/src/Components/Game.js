import React from "react";
import { useState, useEffect, useCallback } from "react";
import CARS from "utilities/cars";
import randomizer from "utilities/randomizer";
import Color from "./icons/Color";
import Body from "./icons/Body";
import Engine from "./icons/Engine";
import Direction from "./icons/Direction";
import Black from "./icons/Black";
import Green from "./icons/Green";
import Red from "./icons/Red";
import Blue from "./icons/Blue";
import Sedan from "./icons/Sedan";
import Truck from "./icons/Truck";
import Suv from "./icons/Suv";
import Hatch from "./icons/Hatch";
import Petrol from "./icons/Petrol";
import Diesel from "./icons/Diesel";
import Electric from "./icons/Electric";
import Hybrid from "./icons/Hybrid";

import Board from "./Board";
import GameOver from "./GameOver";
import Options from "./Options";
// import StatBar from "./StatBar";
import Submit from "./Submit";

let car;

const Start = ({ startGame }) => {
	return (
		<div className="Start">
			<button className="start-btn" onClick={() => startGame()}>
				START
			</button>
		</div>
	);
};

const Game = () => {
	const [attempts, setAttempts] = useState([0, 1, 2]);
	const [count, setCount] = useState(2);
	const [wins, setWins] = useState(0);
	const [currentAttempt, setCurrentAttempt] = useState(0);
	const [attributes] = useState([Color, Body, Engine]);
	const [currentAttribute, setCurrentAttribute] = useState();
	const [options, setOptions] = useState([
		Direction,
		Direction,
		Direction,
		Direction,
	]);

	const [win, setWin] = useState(false);
	const [active, setActive] = useState([false, false, false]);
	const [attrOpt] = useState({
		colors: [Red, Blue, Black, Green],
		body: [Sedan, Truck, Suv, Hatch],
		engine: [Petrol, Electric, Hybrid, Diesel],
	});

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
		setWin(false);
		setCurrentAttempt(0);
		car = randomizer(CARS);
		setCount(2);
		setAttempts([0, 1, 2]);
		disableAttempts();
		setOptions([Direction, Direction, Direction, Direction]);
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
	//console.log(car);
	//disable prev attempt
	//hide inactive attempts
	//set lives
	//reset all state variables
	//gameover screen
	//track games played
	// keep score
	//go button shoul only be enabled when green
	//build and deploy

	const checker = (selection, currentAttempt) => {
		for (let i = 0; i < selection.length; i++) {
			if (selection[i] === car[i]) {
				setChecks((prevState) => {
					prevState[currentAttempt][i] = true;
					return [...prevState];
				});
			} else {
				setChecks((prevState) => {
					prevState[currentAttempt][i] = false;
					return [...prevState];
				});
			}
		}
	};
	const checkWin = useCallback(
		() =>
			checks[currentAttempt][0] &&
			checks[currentAttempt][1] &&
			checks[currentAttempt][2] &&
			setWin(true),
		[checks, currentAttempt]
	);

	useEffect(() => {
		checkWin();
	}, [win, checkWin]);
	const changeLives = useCallback(() => {
		console.log(count);
		//
	}, [count]);
	useEffect(() => {
		changeLives();
	}, [changeLives]);

	const enableAttrmpt = (id) => {
		setActive((prevState) => {
			active[id] = true;
			return [...prevState];
		});
	};
	const disableAttempts = () => {
		enableAttrmpt(0);
		for (let i = 1; i < 3; i++) {
			setActive((prevState) => {
				active[i] = false;
				return [...prevState];
			});
		}
	};
	const disableAttempt = (id) => {
		setActive((prevState) => {
			active[id] = false;
			return [...prevState];
		});
	};

	const handleClick = (attempt_id, attr_id) => {
		//console.log(target, attempt_id, attr_id);
		let myOptions = mapOptions(attr_id);
		setOptions(myOptions);
		setCurrentAttempt(attempt_id);
		setCurrentAttribute(attr_id);
	};
	const mapOptions = (attr_id) => {
		let opt;
		switch (attr_id) {
			case 0:
				opt = attrOpt.colors;
				break;
			case 1:
				opt = attrOpt.body;
				break;
			case 2:
				opt = attrOpt.engine;
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
	};
	const handleSubmit = (selections, currentAttempt) => {
		const selection = selections[currentAttempt];
		//run checker
		//display results
		//update attempts
		//make prev attempt uneditable
		// //console.log(selections, currentAttempt);
		// //console.log(selection);
		checker(selection, currentAttempt);
		disableAttempt(currentAttempt);
		setOptions([Direction, Direction, Direction, Direction]);
		setCurrentAttribute();
		enableAttrmpt(currentAttempt + 1);
		setCount((prevState) => prevState - 1);
	};
	const gameover = () => {
		if (win || count < 0) {
			return true;
		} else return false;
	};
	return (
		<div className="Game" id="Game">
			{/* <StatBar count={count} /> */}

			{gameover() ? <GameOver win={win} wins={wins} /> : ""}
			{/* <GameOver /> */}
			<Board
				attempts={attempts}
				attributes={attributes}
				handleClick={handleClick}
				selections={selections}
				checks={checks}
				active={active}
				win={win}
				gameover={gameover}
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
