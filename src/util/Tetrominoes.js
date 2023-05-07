export const TETROMINOES = {
	I: {
		shape: [
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
		type: "I",
	},
	J: {
		shape: [
			[0, 1, 0],
			[0, 1, 0],
			[1, 1, 0],
		],
		type: "J",
	},
	L: {
		shape: [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 1],
		],
		type: "L",
	},
	O: {
		shape: [
			[1, 1],
			[1, 1],
		],
		type: "O",
	},
	S: {
		shape: [
			[0, 1, 1],
			[1, 1, 0],
			[0, 0, 0],
		],
		type: "S",
	},
	Z: {
		shape: [
			[1, 1, 0],
			[0, 1, 1],
			[0, 0, 0],
		],
	},
	T: {
		shape: [
			[0, 0, 0],
			[0, 1, 0],
			[1, 1, 1],
		],
		type: "T",
	},
};

export const randomTetrominoes = () => {
	const tetrominoes = Object.keys(TETROMINOES);
	const tetrominoIdx = ~~(Math.random() * tetrominoes.length);
	const tetrominoKey = tetrominoes[tetrominoIdx];
	return TETROMINOES[tetrominoKey];
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
