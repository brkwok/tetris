import React from "react";
import Board from "./Board";
import Stats from "./Stats";
import Hold from "./Hold";
import Previews from "./Previews";
import Controller from "./Controller";
import { useBoard } from "../hooks/useBoard";
import { useStats } from "../hooks/useStats";
import { usePlayer } from "../hooks/usePlayer";

const GamePanel = ({ row, col, resetGameOver, setGameOver }) => {
	const [stats, addLinesCompleted] = useStats();
	const [player, setPlayer, resetPlayer] = usePlayer();
	const [board, setBoard] = useBoard({
		row,
		col,
		player,
		resetPlayer,
		addLinesCompleted,
	});

	return (
		<div className="relative flex justify-center items-center h-fit w-fit">
			<Board rows={board.rows} dims={board.dims} />
			<Stats stats={stats} />
			<Previews tetrominoes={player.tetrominoes} />
			<Hold />
			<Controller
				board={board}
				stats={stats}
				player={player}
				setGameOver={setGameOver}
				setPlayer={setPlayer}
			/>
		</div>
	);
};

export default GamePanel;
