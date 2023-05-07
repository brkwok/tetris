import { defaultCell } from "./Cell";

export const createBoard = ({ rows, cols }) => {
	const board = Array.from({ length: rows }, () =>
		Array.from({ length: cols }, () => {
			return { ...defaultCell };
		})
	);

	return { board, dims: { rows, cols } };
};
