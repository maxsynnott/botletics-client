import {
	Box,
	createStyles,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	SvgIcon,
	Theme,
	Toolbar,
} from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { GiChessQueen } from 'react-icons/gi';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerContainer: {
			overflow: 'auto',
		},
	}),
);

export default function Sidebar() {
	const listItems = [
		{
			text: 'Home',
			to: '/',
			icon: <HomeIcon />,
		},
		{
			text: 'Matches',
			to: '/matches',
			icon: (
				<SvgIcon>
					<GiChessQueen />
				</SvgIcon>
			),
		},
	];
	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			classes={{ paper: classes.drawerPaper }}
			variant="permanent"
		>
			<Toolbar />

			<Box className={classes.drawerContainer}>
				<List>
					{listItems.map(({ text, to, icon }) => (
						<ListItem
							button
							key={text}
							component={RouterLink}
							to={to}
						>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
}
