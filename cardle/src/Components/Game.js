import React from "react";
import { useState } from "react";

const Attribute = ({ attribute, handleClick }) => {
	return (
		<div className="Attribute">
			<button
				type="button"
				className="btn btn-secondary"
				onClick={(e) => handleClick(e)}>
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
const Option = ({ option }) => {
	return (
		<div className="option">
			<button type="button" className="btn btn-secondary">
				{option}
			</button>
		</div>
	);
};
const Game = () => {
	const [attempts, setAttempts] = useState([0, 1, 2, 3]);
	const [options, setOptions] = useState([0, 1, 2, 4]);
	const [attributes, setAttributes] = useState(["C", "M", "E"]);
	const [status, setStatus] = useState(["C", "M", "E", "E"]);

	const handleClick = (e) => {
		console.log(e.target.value);
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
			<div className="Options">
				{options.map((option, id) => (
					<Option key={id} option={option} />
				))}
			</div>
			<hr />
		</div>
	);
};
// const Game = () => {
// const [attempts, setAttempts] = useState([0, 1, 2, 3]);
// const [options, setOptions] = useState([0, 1, 2]);
// const [attributes, setattibutes] = useState([0, 1, 2]);
// return (
// 	<div className="container-sm Game">
// 		<div className="first">
// 			<div className="Attempts ">
// 				<div className="Attempt ">
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 				</div>
// 				<div className="Attempt ">
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 				</div>
// 				<div className="Attempt ">
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 					<div className="Attribute">
// 						<button type="button" className="btn btn-secondary">
// 							B
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="StatusBar">
// 				<div className="status">Attempts: 4</div>
// 				<div className="status">Attempts: 4</div>
// 				<div className="status">Attempts: 4</div>
// 			</div>
// 		</div>
// 		<div className="Options">
// 			<div className="option">
// 				<button type="button" className="btn btn-secondary">
// 					B
// 				</button>
// 			</div>
// 			<div className="option">
// 				<button type="button" className="btn btn-secondary">
// 					B
// 				</button>
// 			</div>
// 			<div className="option">
// 				<button type="button" className="btn btn-secondary">
// 					B
// 				</button>
// 			</div>
// 			<div className="option">
// 				<button type="button" className="btn btn-secondary">
// 					B
// 				</button>
// 			</div>
// 		</div>
// 		<hr />
// 	</div>
// );
//}; */}
export default Game;
