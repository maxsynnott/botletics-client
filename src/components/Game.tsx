import { Box, Typography } from '@material-ui/core';
import React from 'react';

interface GameProps {
	game: any;
}

export default function Game({ game }: GameProps) {
	return (
		<Box style={{ border: '1px dashed black' }}>
			<Typography style={{ whiteSpace: 'pre-wrap' }}>
				{JSON.stringify(game, null, 4)}
			</Typography>
		</Box>
	);
}
