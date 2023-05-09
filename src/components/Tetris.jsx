import React from "react";
import Menu from "./Menu";
import { useGameOver } from "../hooks/useGameOver";
import { useStats } from "../hooks/useStats";
import GamePanel from "./GamePanel";

const Tetris = ({ row, col }) => {
	const [gameOver, setGameOver, resetGameOver] = useGameOver();
	const [stats, addLinesCompleted] = useStats();

	const handleStart = () => {
		resetGameOver();
	};

	return (
		<div className="relative flex justify-center align-middle">
			{gameOver ? (
				<Menu onClick={handleStart} />
			) : (
				<GamePanel
					row={row}
					col={col}
					resetGameOver={resetGameOver}
					setGameOver={setGameOver}
					stats={stats}
					addLinesCompleted={addLinesCompleted}
				/>
			)}
		</div>
	);
};

export default Tetris;
