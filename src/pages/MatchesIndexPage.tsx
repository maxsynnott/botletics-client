import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link as RouterLink } from 'react-router-dom';

const url = 'http://localhost:8080/matches';

export default function MatchesIndexPage() {
	const queryClient = useQueryClient();

	const { isLoading, error, data: matches } = useQuery<any[]>(
		url,
		async () => {
			const response = await axios.get(url);
			return response.data;
		},
	);

	const { mutate: createMatch } = useMutation(
		() => axios.post(url, null, { withCredentials: true }),
		{
			onSuccess: () => queryClient.invalidateQueries(url),
		},
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<Box>
			<Typography variant="h2">Matches</Typography>

			<Button
				variant="contained"
				color="primary"
				onClick={() => createMatch()}
			>
				Create Match
			</Button>

			<List>
				{(matches ?? []).map((match) => (
					<ListItem
						button
						component={RouterLink}
						to={'/matches/' + match.id}
					>
						<ListItemText primary={'Game: ' + match.id} />
					</ListItem>
				))}
			</List>
		</Box>
	);
}
