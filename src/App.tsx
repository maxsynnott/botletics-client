import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
	Box,
	createStyles,
	CssBaseline,
	makeStyles,
	Theme,
	Toolbar,
} from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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

const queryClient = new QueryClient();

function App() {
	const classes = useStyles();

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<CssBaseline />

				<Box className={classes.root}>
					<Header />
					<Sidebar />

					<Box className={classes.content}>
						<Toolbar />

						<AppRoutes />
					</Box>
				</Box>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
