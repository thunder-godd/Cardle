const randomizer = (cars) => {
	let correct = [];
	let index = Math.floor(Math.random() * 27);
	correct = cars[index];

	return correct;
};

export default randomizer;
