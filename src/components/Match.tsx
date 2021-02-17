import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
// TODO: Remove
import equal from 'deep-equal';
import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import Game from './Game';

enum GridSizes {
	ONE = 1,
	TWO = 2,
	THREE = 3,
	FOUR = 4,
	SIX = 6,
	TWELVE = 12,
}

interface MatchProps {
	match: any;
}

export default function Match({ match }: MatchProps) {
	const queryClient = useQueryClient();
	const url = 'http://localhost:8080/matches/' + match.id;

	const { mutate: runMatch } = useMutation(
		() => axios.post(url + '/run', null, { withCredentials: true }),
		{
			onSuccess: ({ data }) => {
				if (!equal(queryClient.getQueryData(url), data)) {
					queryClient.setQueryData(url, data);
				}
			},
		},
	);

	const { games } = match;

	const gridSize: GridSizes = 12 / Math.sqrt(games.length);

	return (
		<Box>
			<Button
				onClick={() => runMatch()}
				variant="contained"
				color="primary"
			>
				Run Match Round
			</Button>

			<Grid container>
				{games.map((game: any) => (
					<Grid item xs={gridSize}>
						<Game game={game} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
