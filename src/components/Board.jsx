import React from "react";
import Cell from "./Cell";

const Board = ({ board, dims }) => {

	return (
		<div className="">
			{board.map((row, i) => {
				return row.map((cell, j) => {
					return (
						<Cell
							key={`${i},${j}`}
							className={cell.className}
							filled={cell.filled}
						/>
					);
				});
			})}
		</div>
	);
};

export default Board;
