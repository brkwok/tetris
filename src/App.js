import Tetris from "./components/Tetris";

function App() {
	return (
		<div className="text-center text-white bg-blue-200 p-4 flex items-center justify-center">
			<Tetris row={20} col={10} />
		</div>
	);
}

export default App;
