import { Switch, Route } from 'react-router-dom'
import Chess from '../pages/Chess'
import Home from '../pages/Home'

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/chess" exact={true} component={Chess} />
			<Route path="/" exact={true} component={Home} />
		</Switch>
	)
}
