import axios from 'axios';
import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import Match from '../components/Match';
import socket from 'socket.io-client';
import { Box, Button } from '@material-ui/core';

export default function MatchesShowPage() {
	const { id } = useParams<{ id: string }>();

	const url = 'http://localhost:8080/matches/' + id;
	const queryClient = useQueryClient();

	const { isLoading, error, data: match } = useQuery(
		url,
		async () => {
			const { data: match } = await axios.get(url);
			return match;
		},
		{ refetchOnMount: false },
	);

	const { mutate: runMatch } = useMutation(() =>
		axios.post(url + '/run', null, { withCredentials: true }),
	);

	useEffect(() => {
		const io = socket('http://localhost:8080');

		io.on('games', (updatedGame: any) => {
			console.log('Received ws update', updatedGame.id);
			queryClient.setQueryData(url, (cachedMatch: any) => {
				const updatedGames = cachedMatch.games.map(
					(cachedGame: any) => {
						return cachedGame.id === updatedGame.id
							? updatedGame
							: cachedGame;
					},
				);

				cachedMatch.games = updatedGames;
				return cachedMatch;
			});
		});

		return () => {
			io.close();
		};
	}, []);

	useEffect(() => {});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<Box>
			<Button
				onClick={() => runMatch()}
				color="primary"
				variant="contained"
			>
				Run match
			</Button>
			<Match match={match}></Match>
		</Box>
	);
}
