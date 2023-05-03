import Tetris from "./components/Tetris";
import Menu from "./components/Menu";

function App() {
	return (
		<div className="text-center text-white bg-blue-400 p-[20px]">
			<Tetris rows={20} cols={10} />
		</div>
	);
}

export default App;
