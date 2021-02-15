import { Switch, Route } from 'react-router-dom';
import ChessIndexPage from '../pages/ChessIndexPage';
import HomePage from '../pages/HomePage';
import AuthSuccessPage from '../pages/AuthSuccessPage';
import ChessShowPage from '../pages/ChessShowPage';

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/chess" exact={true} component={ChessIndexPage} />
			<Route path="/" exact={true} component={HomePage} />
			<Route path="/auth/success" component={AuthSuccessPage} />
			<Route path="/chess/:id" component={ChessShowPage} />
		</Switch>
	);
}
