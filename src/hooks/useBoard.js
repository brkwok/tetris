import { useState } from "react";
import { createBoard } from "../util/boardUtil";

export const useBoard = ({ rows, cols }) => {
	const [board, setBoard] = useState(createBoard(rows, cols));

	return [board, setBoard];
};
