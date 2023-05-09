import { useState, useCallback } from "react";

import { randomTetrominoes } from "../util/Tetrominoes";

export const buildPlayer = (prev, newGame) => {
	let tetrominoes;

	if (prev && !newGame) {
		tetrominoes = [...prev.tetrominoes];
		tetrominoes.unshift(randomTetrominoes());
	} else {
		tetrominoes = new Array(5).fill(0).map((_) => {
			return randomTetrominoes();
		});
	}

	return {
		collided: false,
		isFastDropping: false,
		position: { row: 0, col: 4 },
		tetrominoes,
		tetromino: tetrominoes.pop(),
		hold: [],
	};
};

export const usePlayer = () => {
	const [player, setPlayer] = useState(buildPlayer());

	const resetPlayer = useCallback((newGame = false) => {
		setPlayer((prev) => buildPlayer(prev, newGame));
	}, []);

	return [player, setPlayer, resetPlayer];
};
