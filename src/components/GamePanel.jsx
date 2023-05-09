import React from "react";
import Board from "./Board";
import Stats from "./Stats";
import Hold from "./Hold";
import Previews from "./Previews";
import Controller from "./Controller";
import { useBoard } from "../hooks/useBoard";
import { useStats } from "../hooks/useStats";
import { usePlayer } from "../hooks/usePlayer";

const GamePanel = ({
	row,
	col,
	resetGameOver,
	setGameOver,
	stats,
	addLinesCompleted,
}) => {
	const [player, setPlayer, resetPlayer] = usePlayer();
	const [board] = useBoard({
		row,
		col,
		player,
		resetPlayer,
		addLinesCompleted,
	});

	console.log(stats);

	return (
		<div className="relative flex justify-center items-center h-fit w-fit">
			<Board rows={board.rows} />
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
