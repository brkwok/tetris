import { defaultCell } from "./Cell";

export const createBoard = (rows, cols) => {
	const board = Array.from({ length: rows }, () =>
		Array.from({ length: cols }, () => {
			return { ...defaultCell };
		})
	);

	return { board, dims: { rows, cols } };
};

export const transferToBoard = ({
	isFilled,
	className,
	shape,
	position,
	board,
}) => {
	shape.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell) {
				const filled = isFilled;
				const _y = position.row + y;
				const _x = position.col + x;
				board[_y][_x] = { filled, className };
			}
		});
	});

	return board;
};
