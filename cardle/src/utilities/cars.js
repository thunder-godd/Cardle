import Black from "Components/icons/Black";
import Green from "Components/icons/Green";
import Red from "Components/icons/Red";
import Blue from "Components/icons/Blue";
import Sedan from "Components/icons/Sedan";
import Truck from "Components/icons/Truck";
import Suv from "Components/icons/Suv";
import Hatch from "Components/icons/Hatch";
import Petrol from "Components/icons/Petrol";
import Diesel from "Components/icons/Diesel";
import Electric from "Components/icons/Electric";
import Hybrid from "Components/icons/Hybrid";

const createCars = (
	colors = [Red, Blue, Black, Green],
	body = [Sedan, Truck, Suv, Hatch],
	engine = [Petrol, Electric, Hybrid, Diesel]
) => {
	let cars = [];
	let car = [];
	for (let i = 0; i < 4; i++) {
		car[0] = colors[i];
		for (let j = 0; j < 4; j++) {
			car[1] = body[j];
			for (let k = 0; k < 4; k++) {
				car[2] = engine[k];
				cars.push([...car]);
			}
		}
	}
	return cars;
};
const CARS = createCars();
export default CARS;
