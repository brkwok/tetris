import React from "react";
import { createBoard } from "../util/boardUtil";
import { transferToBoard } from "../util/Tetrominoes";
import Cell from "./Cell";

const Preview = ({ tetromino, index }) => {
	const { shape, type } = tetromino;

	const board = createBoard({ row: 4, col: 4 });

	board.rows = transferToBoard({
		isFilled: false,
		type,
		shape,
		position: { row: 0, col: 0 },
		rows: board.rows,
	});
  const style = {
    top: `${index * 15}vh`
  }

	return (
		<div className="absolute right-[-15vh] bg-white rounded-sm" style={style}>
			<div className="grid grid-rows-4 grid-cols-4 gap-[1px] w-[11vh] h-[11vh]">
				{board.rows.map((row, y) => {
					return row.map((cell, x) => {
						return <Cell key={`preview${x},${y}`} type={cell.type} />;
					});
				})}
			</div>
		</div>
	);
};

export default Preview;
