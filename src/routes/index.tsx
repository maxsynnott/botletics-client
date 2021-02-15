import { Switch, Route } from 'react-router-dom';
import ChessPage from '../pages/ChessPage';
import HomePage from '../pages/HomePage';
import AuthSuccessPage from '../pages/AuthSuccessPage';

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/chess" exact={true} component={ChessPage} />
			<Route path="/" exact={true} component={HomePage} />
			<Route path="/auth/success" component={AuthSuccessPage} />
		</Switch>
	);
}
