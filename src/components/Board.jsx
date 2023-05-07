import React from "react";
import Cell from "./Cell";

const Board = ({ board }) => {
	return (
		<div className="bg-blue-400 w-[45vh] h-[90vh] rounded-sm border-2 border-black shadow-md grid grid-rows-{20} grid-cols-10 gap-[1px]">
			{board.map((row, y) => {
				return row.map((cell, x) => {
					return (
						<Cell
							key={`cell(${x},${y})`}
							color={cell.color}
						/>
					);
				});
			})}
		</div>
	);
};

export default Board;
