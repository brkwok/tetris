import React from "react";
import Menu from "./Menu";
import { useGameOver } from "../hooks/useGameOver";
import { useStats } from "../hooks/useStats";
import { usePlayer } from "../hooks/usePlayer";
import { useBoard } from "../hooks/useBoard";
import GamePanel from "./GamePanel";

const Tetris = ({ row, col }) => {
	const [gameOver, setGameOver, resetGameOver] = useGameOver();
	const [player, setPlayer, resetPlayer] = usePlayer();
	const [stats, addLinesCompleted] = useStats();
	const [board, resetBoard] = useBoard({
		row,
		col,
		player,
		resetPlayer,
		addLinesCompleted,
	});

	const handleStart = () => {
		resetGameOver();
		resetPlayer(true);
		resetBoard();
	};

	return (
		<div className="relative flex justify-center align-middle">
			{gameOver ? <Menu onClick={handleStart} /> : null}

			<GamePanel
				row={row}
				col={col}
				resetGameOver={resetGameOver}
				setGameOver={setGameOver}
				gameOver={gameOver}
				stats={stats}
				player={player}
				setPlayer={setPlayer}
				resetPlayer={resetPlayer}
				board={board}
				addLinesCompleted={addLinesCompleted}
			/>
		</div>
	);
};

export default Tetris;
