export const Action = {
	Left: "Left",
	Right: "Right",
	FastDrop: "FastDrop",
	RotateRight: "RotateRight",
	RotateLeft: "RotateLeft",
	SlowDrop: "SlowDrop",
	Pause: "Pause",
	Hold: "Hold",
	Quit: "Quit",
};

export const KeyMap = {
	ArrowLeft: "Left",
	ArrowRight: "Right",
	ArrowUp: "RotateRight",
	ArrowDown: "SlowDrop",
	Space: "FastDrop",
	KeyZ: "RotateLeft",
	KeyP: "Pause",
	KeyQ: "Quit",
	ShiftLeft: "Hold",
	ShiftRight: "Hold",
};

export const actionForKey = (key) => KeyMap[key];

export const actionIsDrop = (key) => {
	return [Action.FastDrop, Action.SlowDrop].includes(key);
}