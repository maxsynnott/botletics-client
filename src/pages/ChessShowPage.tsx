import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LayoutWrapper from '../components/LayoutWrapper';
import ChessGame from '../components/ChessGame';

export default function ChessShowPage() {
	return (
		<LayoutWrapper>
			<ChessShowPageContent />
		</LayoutWrapper>
	);
}

function ChessShowPageContent() {
	const { id } = useParams<{ id: string }>();
	const url = 'http://localhost:8080/chess/' + id;
	const { isLoading, error, data: chessGame } = useQuery(url, async () => {
		const response = await axios.get(url);
		return response.data;
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return <ChessGame game={chessGame}></ChessGame>;
}
