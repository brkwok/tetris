import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export const createBoard = ({ row, col }) => {
	const rows = Array.from({ length: row }, () =>
		Array.from({ length: col }, () => {
			return { ...defaultCell };
		})
	);

	return { rows, dims: { row, col } };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
	const { tetromino, position } = player;

	let rows = board.rows.map((row) =>
		row.map((cell) => (cell.filled ? cell : { ...defaultCell }))
	);

	rows = transferToBoard({
		rows,
		isFilled: player.collided,
		position,
		shape: tetromino.shape,
		type: tetromino.type,
	});

	if (player.collided || player.isFastDropping) {
		resetPlayer();
	}

	return {
		rows,
		dim: { ...board.dim },
	};
};

export const isInBound = ({ board, currPosition, shape }) => {
	for (let y = 0; y < shape.length; y++) {
		const row = y + currPosition.row;

		for (let x = 0; x < shape[y].length; x++) {
			if (shape[y][x]) {
				const col = x + currPosition.col;
				const valid = board.rows[row] && board.rows[row][col];

				if (!valid) return false;
			}
		}
	}

	return true;
};

export const isCollided = ({ board, currPosition, shape }) => {
	for (let y = 0; y < shape.length; y++) {
		const row = y + currPosition.row;

		for (let x = 0; x < shape[y].length; x++) {
			if (shape[y][x]) {
				const col = x + currPosition.col;

				if (board.rows[row] && board.rows[row][col] && board.rows[row][col].filled) {
					return true;
				}
			}
		}
	}

	return false;
};
