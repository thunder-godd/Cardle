import Gamebar from "./Components/Gamebar";
import Game from "./Components/Game";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Gamebar />
				<Game />
				{/* gamebar 
				game:
					Grid:
						3x5
					options 3x1
				 */}
			</div>
		</div>
	);
}

export default App;
