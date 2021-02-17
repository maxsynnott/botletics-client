import {
	AppBar,
	Button,
	Toolbar,
	Typography,
	Link,
	Box,
} from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
	return (
		<AppBar position="static">
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
