import React from "react";
import { createBoard } from "../util/boardUtil";
import { transferToBoard } from "../util/Tetrominoes";
import Cell from "./Cell";

const Preview = ({ tetromino, index }) => {
	const { shape, type } = tetromino;
  console.log(tetromino)

	const board = createBoard({ rows: 4, cols: 4 });

	board.board = transferToBoard({
		isFilled: false,
		type,
		shape,
		position: { row: 0, col: 0 },
		board: board.board,
	});
  const style = {
    top: `${index * 15}vh`
  }

	return (
		<div className="absolute right-[-15vh] bg-white rounded-sm" style={style}>
			<div className="grid grid-rows-4 grid-cols-4 gap-[1px] w-[11vh] h-[11vh]">
				{board.board.map((row, y) => {
					return row.map((cell, x) => {
						return <Cell key={`preview${x},${y}`} type={cell.type} />;
					});
				})}
			</div>
		</div>
	);
};

export default Preview;
