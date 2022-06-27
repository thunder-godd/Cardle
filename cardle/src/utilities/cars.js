const createCars = (
	colors = ["Red", "Blue", "Black"],
	body = ["Sedan", "Truck", "SUV"],
	engine = ["Petrol", "Electric", "Hybrid"]
) => {
	let cars = [];
	let car = [];
	for (let i = 0; i < 3; i++) {
		car[0] = colors[i];
		for (let j = 0; j < 3; j++) {
			car[1] = body[j];
			for (let k = 0; k < 3; k++) {
				car[2] = engine[k];
				cars.push([...car]);
			}
		}
	}
	return cars;
};
const CARS = createCars();
export default CARS;
