import LayoutWrapper from '../components/LayoutWrapper';

export default function HomePage() {
	return (
		<LayoutWrapper>
			<HomePageContent />
		</LayoutWrapper>
	);
}

function HomePageContent() {
	return <h1>HOME PAGE</h1>;
}
