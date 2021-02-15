import { Redirect } from 'react-router-dom';
import useQueryParams from '../hooks/useQueryParams';

export default function AuthSuccessPage() {
	const queryParams = useQueryParams();
	const token = queryParams.get('token');

	if (token) {
		localStorage.setItem('token', token);
		return <Redirect to="/" />;
	}

	return <h2>Redirecting...</h2>;
}
