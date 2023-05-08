export const TETROMINOES = {
	I: {
		shape: [
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
		type: "I",
		rotationIdx: 0,
	},
	J: {
		shape: [
			[0, 1, 0],
			[0, 1, 0],
			[1, 1, 0],
		],
		type: "J",
		rotationIdx: 0,
	},
	L: {
		shape: [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 1],
		],
		type: "L",
		rotationIdx: 0,
	},
	O: {
		shape: [
			[1, 1],
			[1, 1],
		],
		type: "O",
		rotationIdx: 0,
	},
	S: {
		shape: [
			[0, 1, 1],
			[1, 1, 0],
			[0, 0, 0],
		],
		type: "S",
		rotationIdx: 0,
	},
	Z: {
		shape: [
			[1, 1, 0],
			[0, 1, 1],
			[0, 0, 0],
		],
		type: "Z",
		rotationIdx: 0,
	},
	T: {
		shape: [
			[0, 1, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
		type: "T",
		rotationIdx: 0,
	},
};

export const ROTATION_MAP = {
	I: [
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
		],
	],

	J: [
		[
			[0, 1, 0],
			[0, 1, 0],
			[1, 1, 0],
		],
		[
			[0, 0, 0],
			[1, 0, 0],
			[1, 1, 1],
		],
		[
			[0, 1, 1],
			[0, 1, 0],
			[0, 1, 0],
		],
		[
			[1, 1, 1],
			[0, 0, 1],
			[0, 0, 0],
		],
	],

	L: [
		[
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 1],
		],
		[
			[0, 0, 0],
			[1, 1, 1],
			[1, 0, 0],
		],
		[
			[1, 1, 0],
			[0, 1, 0],
			[0, 1, 0],
		],
		[
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0],
		],
	],

	O: [
		[
			[1, 1],
			[1, 1],
		],
		[
			[1, 1],
			[1, 1],
		],
		[
			[1, 1],
			[1, 1],
		],
		[
			[1, 1],
			[1, 1],
		],
	],

	S: [
		[
			[0, 1, 1],
			[1, 1, 0],
			[0, 0, 0],
		],
		[
			[0, 1, 0],
			[0, 1, 1],
			[0, 0, 1],
		],
		[
			[0, 0, 0],
			[0, 1, 1],
			[1, 1, 0],
		],
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 1, 0],
		],
	],

	Z: [
		[
			[1, 1, 0],
			[0, 1, 1],
			[0, 0, 0],
		],
		[
			[0, 0, 1],
			[0, 1, 1],
			[0, 1, 0],
		],
		[
			[0, 0, 0],
			[1, 1, 0],
			[0, 1, 1],
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[1, 0, 0],
		],
	],

	T: [
		[
			[0, 1, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
		[
			[0, 1, 0],
			[0, 1, 1],
			[0, 1, 0],
		],
		[
			[0, 0, 0],
			[1, 1, 1],
			[0, 1, 0],
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[0, 1, 0],
		],
	],
};

export const randomTetrominoes = () => {
	const tetrominoes = Object.keys(TETROMINOES);
	const tetrominoIdx = ~~(Math.random() * tetrominoes.length);
	const tetrominoKey = tetrominoes[tetrominoIdx];
	return TETROMINOES[tetrominoKey];
};

export const transferToBoard = ({ isFilled, type, shape, position, rows }) => {
	shape.forEach((row, y) => {
		row.forEach((cell, x) => {
			if (cell) {
				const filled = isFilled;
				const _y = position.row + y;
				const _x = position.col + x;
				rows[_y][_x] = { filled, type };
			}
		});
	});

	return rows;
};

export const rotate = ({ type, direction, tetromino }) => {
	const rotationIdx = tetromino.rotationIdx;
	const nextRotationIdx =
		direction === 1 ? (rotationIdx + 1) % 4 : (rotationIdx + 3) % 4;
	const nextShape = ROTATION_MAP[type][nextRotationIdx];

	return [_createCopy(nextShape), nextRotationIdx];
};

const _createCopy = (arr) => {
	let newArray = Array.from({ length: arr.length }, () =>
		Array.from({ length: arr[0].length }, () => 0)
	);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			newArray[i][j] = arr[i][j];
		}
	}

	return newArray;
};
