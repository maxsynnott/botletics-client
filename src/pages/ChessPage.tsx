import axios from 'axios';
import { QueryCache, useMutation, useQuery, useQueryClient } from 'react-query';
import ChessGame from '../components/ChessGame';
import LayoutWrapper from '../components/LayoutWrapper';

const url = 'http://localhost:8080/chess';

export default function ChessPage() {
	return (
		<LayoutWrapper>
			<ChessPageContent />
		</LayoutWrapper>
	);
}

function ChessPageContent() {
	const queryClient = useQueryClient();

	const { isLoading, error, data } = useQuery<any[]>(url, async () => {
		const response = await axios.get(url);
		return response.data;
	});

	const { mutate: createGame } = useMutation(
		() =>
			axios.post(url, null, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}),
		{
			onSuccess: () => queryClient.invalidateQueries(url),
		},
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	const chessGames = data ?? [];

	return (
		<div>
			<h1>CHESS PAGE</h1>
			<button onClick={() => createGame()}>Create Game</button>
			<h2>List of chess games:</h2>
			<ul>
				{chessGames.map((chessGame) => (
					<ChessGame game={chessGame} />
				))}
			</ul>
		</div>
	);
}
