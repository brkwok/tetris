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

export const nextBoard = ({ board, player, setPlayer, addLinesCleared }) => {
	const {
		tetromino,
		position,
	} = player;

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

	return {
		rows,
		dim: { ...board.dim },
	};
};
