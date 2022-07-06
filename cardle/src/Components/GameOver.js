import React from "react";
import Checkered from "./icons/Checkered";
import Trophy from "./icons/Trophy";
import Over from "./icons/Over";
import Crash from "./icons/Crash";
const Win = () => {
	return (
		<div className="win endgame">
			<Checkered />
			<Trophy />
		</div>
	);
};
const Lose = () => {
	return (
		<div className="lose endgame">
			<Over />
			<Crash />
		</div>
	);
};
const GameOver = ({ win, wins }) => {
	return (
		<div className="gameover">
			{win ? <Win /> : <Lose />}
			<h4>Press Start to Play again</h4>
		</div>
	);
};

export default GameOver;
