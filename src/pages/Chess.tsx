import ChessGame from '../components/ChessGame'
import LayoutWrapper from '../components/LayoutWrapper'

export default function Chess() {
	const chessGames = [
		{ id: 1, history: ['...'] },
		{ id: 2, history: ['...'] },
	]

	return (
		<LayoutWrapper>
			<div>
				<h1>CHESS PAGE</h1>
				<h2>List of chess games:</h2>
				<ul>
					{chessGames.map((chessGame) => (
						<ChessGame game={chessGame} />
					))}
				</ul>
			</div>
		</LayoutWrapper>
	)
}
