import React from "react";
import Board from "./Board";
import Stats from "./Stats";
// import Hold from "./Hold";
import Previews from "./Previews";
import Controller from "./Controller";

const GamePanel = ({
	row,
	col,
	gameOver,
	setGameOver,
	stats,
	addLinesCompleted,
	player,
	resetPlayer,
	setPlayer,
	board
}) => {

	return (
		<div className="relative flex justify-center items-center h-fit w-fit">
			<Board rows={board.rows} />
			<Stats stats={stats} />
			<Previews tetrominoes={player.tetrominoes} />
			{/* <Hold /> */}
			<Controller
				board={board}
				stats={stats}
				player={player}
				setGameOver={setGameOver}
				gameOver={gameOver}
				setPlayer={setPlayer}
			/>
		</div>
	);
};

export default GamePanel;
