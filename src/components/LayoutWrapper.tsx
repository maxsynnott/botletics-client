import {
	Box,
	createStyles,
	CssBaseline,
	makeStyles,
	Theme,
	Toolbar,
} from '@material-ui/core';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}),
);

interface LayoutWrapperProps {
	children: any;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Header />
			<Sidebar />
			<Box className={classes.content}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
