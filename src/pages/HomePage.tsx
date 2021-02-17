import { Typography } from '@material-ui/core';
import LayoutWrapper from '../components/LayoutWrapper';

export default function HomePage() {
	return (
		<LayoutWrapper>
			<HomePageContent />
		</LayoutWrapper>
	);
}

function HomePageContent() {
	return <Typography variant="h1">Welcome to Botletics</Typography>;
}
