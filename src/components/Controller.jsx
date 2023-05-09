import React from "react";
import { Action, actionForKey, actionIsDrop } from "../util/actionUtil";
import { playerController } from "../util/PlayerController";
import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";

const Controller = ({ board, stats, player, gameOver, setGameOver, setPlayer }) => {
	const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ stats });

	useInterval(() => {
		handleInput({ action: Action.SlowDrop });
	}, dropTime);

	const onKeyDown = ({ code }) => {
		const action = actionForKey(code);

		if (action === Action.Pause) {
			if (dropTime) {
				pauseDropTime();
			} else {
				resumeDropTime();
			}
		} else if (action === Action.Quit) {
			setGameOver(true);
		} else {
			if (actionIsDrop(action)) {
        if (!dropTime){
          pauseDropTime();
        }
        handleInput(action);
			}

			if (!dropTime) {
				return;
			}

			handleInput({ action });
		}
	};

	const onKeyUp = ({ code }) => {
		const action = actionForKey(code);

		if (actionIsDrop(action)) {
			resumeDropTime();
		}
	};

	const handleInput = ({ action }) => {
		playerController({
			action,
			board,
			player,
			setPlayer,
      gameOver,
			setGameOver,
		});
	};

	return (
		<input
			className="absolute bg-transparent w-[100vw] h-[100vh] focus:outline-none hover:cursor-default"
			style={{ color: "transparent", textColor: "transparent" }}
			id="controller"
			type="text"
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
		/>
	);
};

export default Controller;
