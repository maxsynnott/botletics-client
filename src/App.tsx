import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppRoutes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
	Box,
	createMuiTheme,
	createStyles,
	CssBaseline,
	makeStyles,
	Theme,
	ThemeProvider,
	Toolbar,
} from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: red,
	},
});

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
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<CssBaseline />

					<Box className={classes.root}>
						<Header />
						<Sidebar />

						<Box className={classes.content}>
							<Toolbar />

							<AppRoutes />
						</Box>
					</Box>
				</QueryClientProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
