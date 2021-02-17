import {
	AppBar,
	Button,
	Toolbar,
	Typography,
	Link,
	Box,
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
		},
	}),
);

export default function Header() {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Link component={RouterLink} to="/" color="inherit">
					<Typography variant="h6">Botletics</Typography>
				</Link>

				<Box flexGrow={1} />

				<Link href="http://localhost:8080/auth/google/init">
					<Button variant="contained">Login</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
