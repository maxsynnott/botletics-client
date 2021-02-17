import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div style={{ background: 'gray', height: '60px' }}>
			<Link to="/">Home</Link>
			<Link to="/matches">Matches</Link>
			<a href="http://localhost:8080/auth/google/init">
				Authenticate with Google
			</a>
		</div>
	);
}
