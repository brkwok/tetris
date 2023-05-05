import Tetris from "./components/Tetris";

function App() {
	return (
		<div className="text-center text-white bg-white p-4 flex items-center justify-center">
			<Tetris rows={20} cols={10} />
		</div>
	);
}

export default App;
