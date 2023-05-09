import { rotate } from "./Tetrominoes";
import { Action } from "./actionUtil";
import { isInBound, isCollided } from "./boardUtil";

const attempRotation = ({ board, player, setPlayer, dir }) => {
	// direction of the rotation
	const direction = dir === Action.RotateRight ? 1 : 0;

	const [shape, nextRotationIdx] = rotate({
		type: player.tetromino.type,
		direction,
		tetromino: player.tetromino,
	});

	const currPosition = player.position;

	const rotationValid =
		isInBound({ board, currPosition, shape }) &&
		!isCollided({ board, currPosition, shape });

	if (rotationValid) {
		setPlayer({
			...player,
			tetromino: {
				...player.tetromino,
				shape,
				rotationIdx: nextRotationIdx,
			},
		});
	} else {
		return false;
	}
};

export const movePlayer = ({ delta, position, shape, board }) => {
	const desiredNextPosition = {
		row: position.row + delta.row,
		col: position.col + delta.col,
	};

	const collided = isCollided({
		board,
		currPosition: desiredNextPosition,
		shape,
	});

	const inBound = isInBound({
		board,
		currPosition: desiredNextPosition,
		shape,
	});

	const isNotValidMove = !inBound || (inBound && collided);
	const nextPosition = isNotValidMove ? position : desiredNextPosition;

	const isMovingDown = delta.row > 0;
	const isHit = isMovingDown && (collided || !inBound);

	return { collided: isHit, nextPosition };
};

const attemptMove = ({ board, player, setPlayer, action, setGameOver }) => {
	const delta = { row: 0, col: 0 };
	let isFastDropping = false;

	if (action === Action.FastDrop) {
		isFastDropping = true;
	} else if (action === Action.SlowDrop) {
		delta.row += 1;
	} else if (action === Action.Left) {
		delta.col -= 1;
	} else if (action === Action.Right) {
		delta.col += 1;
	}

	const { collided, nextPosition } = movePlayer({
		delta,
		position: player.position,
		shape: player.tetromino.shape,
		board,
	});

	const isGameOver = collided && player.position.row === 0;

	if (isGameOver) {
		setGameOver(isGameOver);
	}

	setPlayer({
		...player,
		collided,
		isFastDropping,
		position: nextPosition,
	});
};

export const playerController = ({
	action,
	board,
	player,
	setPlayer,
	gameOver,
	setGameOver,
}) => {
	if (!action || gameOver) return;

	if (action === Action.RotateRight || action === Action.RotateLeft) {
		const dir = action;
		attempRotation({ board, player, setPlayer, dir });
	} else {
		attemptMove({ board, player, setPlayer, action, setGameOver, gameOver });
	}
};
