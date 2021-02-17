import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8080/matches';

export default function MatchesIndexPage() {
	const queryClient = useQueryClient();

	const { isLoading, error, data: matches } = useQuery<any[]>(
		url,
		async () => {
			const response = await axios.get(url);
			return response.data;
		},
	);

	const { mutate: createMatch } = useMutation(
		() => axios.post(url, null, { withCredentials: true }),
		{
			onSuccess: () => queryClient.invalidateQueries(url),
		},
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div>
			<h1>MATCHES PAGE</h1>
			<button onClick={() => createMatch()}>Create Match</button>
			<h2>List of chess matches:</h2>
			<ul>
				{(matches ?? []).map((match) => (
					<Link to={'/matches/' + match.id}>Game: {match.id}</Link>
				))}
			</ul>
		</div>
	);
}
