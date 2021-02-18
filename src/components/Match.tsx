import React from 'react';
import { Box, Grid } from '@material-ui/core';
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
	const { games } = match;
	const gridSize: GridSizes = 12 / Math.sqrt(games.length);

	return (
		<Grid container>
			{games.map((game: any) => (
				<Grid item xs={gridSize} key={game.id}>
					<Game game={game} />
				</Grid>
			))}
		</Grid>
	);
}
