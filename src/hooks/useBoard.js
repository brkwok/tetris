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

	const resetBoard = useCallback(() => {
		const newBoard = createBoard({ row, col });
		setBoard(newBoard);
	}, [row, col]);

	useEffect(() => {
		setBoard((prevBoard) => {
			const next = nextBoard({
				board: { rows: prevBoard.rows, dims: { ...prevBoard.dims } },
				player,
				resetPlayer,
				addLinesCompleted,
			});

			return {
				rows: next.rows,
				dims: { ...next.dims },
			};
		});
	}, [player, resetPlayer, addLinesCompleted]);

	return [board, resetBoard];
};
