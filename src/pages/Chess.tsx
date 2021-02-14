import axios from 'axios';
import { useQuery } from 'react-query';
import ChessGame from '../components/ChessGame';
import LayoutWrapper from '../components/LayoutWrapper';

const url = 'http://localhost:8080/chess';

export default function Chess() {
	return (
		<LayoutWrapper>
			<ChessPage />
		</LayoutWrapper>
	);
}

function ChessPage() {
	const { isLoading, error, data } = useQuery<any[]>(url, async () => {
		const response = await axios.get(url);
		return response.data;
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	const chessGames = data ?? [];

	return (
		<div>
			<h1>CHESS PAGE</h1>
			<h2>List of chess games:</h2>
			<ul>
				{chessGames.map((chessGame) => (
					<ChessGame game={chessGame} />
				))}
			</ul>
		</div>
	);
}
