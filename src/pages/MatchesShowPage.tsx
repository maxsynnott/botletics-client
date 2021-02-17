import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LayoutWrapper from '../components/LayoutWrapper';
import Match from '../components/Match';

export default function MatchesShowPage() {
	return (
		<LayoutWrapper>
			<MatchesShowPageContent />
		</LayoutWrapper>
	);
}

function MatchesShowPageContent() {
	const { id } = useParams<{ id: string }>();
	const url = 'http://localhost:8080/matches/' + id;

	const { isLoading, error, data: match } = useQuery(url, async () => {
		const response = await axios.get(url);
		return response.data;
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return <Match match={match}></Match>;
}
