import React from "react";
import Board from "./Board";
import { useBoard } from "../hooks/useBoard";

const GamePanel = ({ rows, cols, resetGameOver }) => {
	const [board, setBoard] = useBoard({ rows, cols });

	return (
		<div className="relative ">
			<Board board={board.board} dims={board.dims} />
		</div>
	);
};

export default GamePanel;
