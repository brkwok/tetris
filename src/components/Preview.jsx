import React from "react";
import { createBoard } from "../util/boardUtil";
import { transferToBoard } from "../util/Tetrominoes";
import Cell from "./Cell";

const Preview = ({ tetromino, index }) => {
	const { shape, className } = tetromino;

	const board = createBoard({ rows: 4, cols: 4 });

	board.board = transferToBoard({
		isFilled: false,
		className,
		shape,
		position: { row: 0, col: 0 },
		board: board.board,
	});

	return (
		<div className="absolute top-0 left-0 bg-black rounded-md">
			<div className="grid grid-row-4 grid-col-4 gap-1 w-[11vw] h-[11vw]">
				{board.board.map((row, y) => {
					return row.map((cell, x) => {
						return <Cell key={`preview${x},${y}`} cell={cell} />;
					});
				})}
			</div>
		</div>
	);
};

export default Preview;
