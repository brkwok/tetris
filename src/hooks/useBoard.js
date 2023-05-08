import { useEffect, useState } from "react";
import { createBoard } from "../util/boardUtil";
import { nextBoard } from "../util/boardUtil";

export const useBoard = ({
	row,
	col,
	player,
	resetPlayer,
	addLinesCleared,
}) => {
	const [board, setBoard] = useState(createBoard({ row, col }));

	useEffect(() => {
		setBoard((prevBoard) => {
			return nextBoard({
				board: prevBoard,
				player,
				resetPlayer,
				addLinesCleared,
			});
		});
	}, [player, resetPlayer, addLinesCleared]);

	return [board, setBoard];
};
