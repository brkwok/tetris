import React from "react";
import Cell from "./Cell";

const Board = ({ board, dims }) => {
	return (
		<div className="bg-blue-400 w-[45vh] h-[90vh] rounded-sm border-2 border-black shadow-md grid grid-rows-{20} grid-cols-10 gap-[2px]">
			{board.map((row, i) => {
				return row.map((cell, j) => {
					return (
						<Cell
							key={`cell(${i},${j})`}
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
