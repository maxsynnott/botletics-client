import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MatchesIndexPage from '../pages/MatchesIndexPage';
import MatchShowPage from '../pages/MatchesShowPage';

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/" exact={true} component={HomePage} />
			<Route path="/matches" exact={true} component={MatchesIndexPage} />
			<Route path="/matches/:id" component={MatchShowPage} />
		</Switch>
	);
}
