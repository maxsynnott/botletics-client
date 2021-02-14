interface ChessGameProps {
	game: any
}

export default function ChessGame({ game }: ChessGameProps) {
	return <li>{JSON.stringify(game, null, 4)}</li>
}
