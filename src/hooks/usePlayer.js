import { useState, useCallback } from "react";

import { randomTetrominoes } from "../util/Tetrominoes";

const buildPlayer = (prev) => {
	let tetrominoes;

	if (prev) {
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

	const resetPlayer = useCallback(() => {
		setPlayer((prev) => buildPlayer(prev));
	}, []);

	return [player, setPlayer, resetPlayer];
};
