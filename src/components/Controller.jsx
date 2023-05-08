import React from "react";
import { actionForKey } from "../util/actionUtil";
import { playerController } from "../util/PlayerController";

const Controller = ({ board, stats, player, setGameOver, setPlayer }) => {
	const onKeyDown = ({ code }) => {
		const action = actionForKey(code);

		handleInput({ action });
	};

	const handleInput = ({ action }) => {
		playerController({
			action,
			board,
			player,
			setPlayer,
			setGameOver,
		});
	};

	return (
		<input
			className="absolute"
			type="text"
			onKeyDown={onKeyDown}
		/>
	);
};

export default Controller;
