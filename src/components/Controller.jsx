import React from "react";
import { Action, actionForKey } from "../util/actionUtil";
import { playerController } from "../util/PlayerController";
import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";

const Controller = ({ board, stats, player, setGameOver, setPlayer }) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ stats })

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
    }
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

	return <input className="absolute" type="text" onKeyDown={onKeyDown} />;
};

export default Controller;
