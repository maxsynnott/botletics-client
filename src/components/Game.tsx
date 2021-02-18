import Chessboard from 'chessboardjsx';

interface GameProps {
	game: any;
	widthDenominator: number;
}

export default function Game({ game, widthDenominator }: GameProps) {
	const { history } = game;
	const fen = history[0];

	return (
		// Replace with custom, efficient, read-only version
		<Chessboard
			position={fen}
			calcWidth={({ screenWidth }) =>
				(screenWidth - 298) / widthDenominator
			}
			transitionDuration={150}
			draggable={false}
		/>
	);
}
