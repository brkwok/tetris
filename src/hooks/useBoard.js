import { useCallback, useEffect, useState } from "react";
import { createBoard } from "../util/boardUtil";
import { nextBoard } from "../util/boardUtil";

export const useBoard = ({
	row,
	col,
	player,
	resetPlayer,
	addLinesCompleted,
}) => {
	const [board, setBoard] = useState(createBoard({ row, col }));

	const resetBoard = useCallback( () => {
		const newBoard = createBoard({row, col});
		setBoard(newBoard);
	}, [row, col])

	useEffect(() => {
		setBoard((prevBoard) => {
			return nextBoard({
				board: prevBoard,
				player,
				resetPlayer,
				addLinesCompleted,
			});
		});
	}, [player, resetPlayer, addLinesCompleted]);

	return [board, resetBoard];
};
