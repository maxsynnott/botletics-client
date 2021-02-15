import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

interface ChessGameProps {
	game: any;
}

export default function ChessGame({ game }: ChessGameProps) {
	const queryClient = useQueryClient();
	const url = 'http://localhost:8080/chess/' + game.id;

	const { mutate: runGame } = useMutation(
		() =>
			axios.post(url + '/run', null, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			}),
		{
			onSuccess: () => queryClient.invalidateQueries(url),
		},
	);

	return (
		<div>
			<button onClick={() => runGame()}>Run Game</button>
			<pre>{JSON.stringify(game, null, 4)}</pre>
		</div>
	);
}
