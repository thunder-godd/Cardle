import Gamebar from "./Components/Gamebar";
import Game from "./Components/Game";
import "./App.css";

function App() {
	return (
		<div className="container App">
			<Gamebar />
			<Game />
			{/* gamebar 
				game:
					Grid:
						3x5
					options 3x1
				 */}
			<footer>thunder_godd</footer>
		</div>
	);
}

export default App;
