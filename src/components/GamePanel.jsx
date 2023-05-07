import React from "react";
import Board from "./Board";
import Stats from "./Stats";
import Hold from "./Hold";
import Previews from "./Previews";
import { useBoard } from "../hooks/useBoard";
import { useStats } from "../hooks/useStats";
import { usePlayer } from "../hooks/usePlayer";

const GamePanel = ({ rows, cols, resetGameOver }) => {
	const [board, setBoard] = useBoard({ rows, cols });
	const [stats, addLinesCompleted] = useStats();
  const [player, setPlayer, resetPlayer] = usePlayer();

	return (
		<div className="relative flex justify-center items-center h-fit w-fit">
			<Board board={board.board} dims={board.dims} />
			<Stats stats={stats} />
			<Previews tetrominoes={player.tetrominoes} />
			<Hold />
		</div>
	);
};

export default GamePanel;
