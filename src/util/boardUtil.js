import { defaultCell } from "./Cell";
import { movePlayer } from "./PlayerController";
import { transferToBoard } from "./Tetrominoes";

export const createBoard = ({ row, col }) => {
	const rows = Array.from({ length: row }, () =>
		Array.from({ length: col }, () => {
			return { ...defaultCell };
		})
	);

	return { rows, dims: { row, col } };
};

const findDropPosition = ({ board, position, shape }) => {
	let max = board.dims.row - position.row + 1;
	let row = 0;

	for (let i = 0; i < max; i++) {
		const delta = { row: i, col: 0 };
		const res = movePlayer({ delta, position, shape, board });
		const { collided } = res;

		if (collided) break;

		row = position.row + i;
	}

	return { ...position, row };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCompleted }) => {
	const { tetromino, position } = player;

	let rows = board.rows.map((row) =>
		row.map((cell) => (cell.filled ? cell : { ...defaultCell }))
	);

	// drop position
	const dropPos = findDropPosition({
		board,
		position,
		shape: tetromino.shape,
	});

	// ghost piece type
	const ghostType = player.isFastDropping ? tetromino.type : "G";

	// if user is fast dropping, place the block where the ghost was
	rows = transferToBoard({
		rows,
		isFilled: player.isFastDropping,
		position: dropPos,
		shape: tetromino.shape,
		type: ghostType,
	});

	// if the user is not fast dropping, continue normally
	if (!player.isFastDropping) {
		rows = transferToBoard({
			rows,
			isFilled: player.collided,
			position,
			shape: tetromino.shape,
			type: tetromino.type,
		});
	}

	const blankRow = board.rows[0].map((_) => ({ ...defaultCell }));
	let linesCleared = 0;
	const newBoard = [];

	board.rows.forEach( (row) => {
		if (row.every( (col) => col.filled)) {
			linesCleared++;
			newBoard.unshift([...blankRow]);
		}	else {
			newBoard.push(row);
		}
	})

	board.rows = newBoard;

	if (linesCleared > 0) {
		addLinesCompleted(linesCleared);
	}

	if (player.collided || player.isFastDropping) {
		resetPlayer();
	}

	return {
		rows,
		dims: { ...board.dims },
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

				if (
					board.rows[row] &&
					board.rows[row][col] &&
					board.rows[row][col].filled
				) {
					return true;
				}
			}
		}
	}

	return false;
};
