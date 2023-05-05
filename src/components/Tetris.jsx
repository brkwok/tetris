import React from "react";
import Menu from "./Menu";
import { useGameOver } from "../hooks/useGameOver";
import GamePanel from "./GamePanel";

const Tetris = ({ rows, cols }) => {
	const [gameOver, setGameOver, resetGameOver] = useGameOver();

	const handleStart = () => {
		resetGameOver();
	};

	return (
		<div className="relative flex justify-center align-middle">
			{gameOver ? <Menu onClick={handleStart} /> : null}

			<GamePanel rows={rows} cols={cols} resetGameOver={resetGameOver} />
		</div>
	);
};

export default Tetris;
