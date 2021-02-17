import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
// TODO: Remove
import equal from 'deep-equal';
import { useEffect, useState } from 'react';

interface MatchProps {
	match: any;
}

export default function Match({ match }: MatchProps) {
	const queryClient = useQueryClient();
	const url = 'http://localhost:8080/matches/' + match.id;
	const [count, setCount] = useState(0);
	useEffect(() => console.log(count), [count]);

	const { mutate: runMatch } = useMutation(
		() => axios.post(url + '/run', null, { withCredentials: true }),
		{
			onSuccess: ({ data }) => {
				if (!equal(queryClient.getQueryData(url), data)) {
					queryClient.setQueryData(url, data);
					setCount(count + 1);
					runMatch();
				}
			},
		},
	);

	return (
		<div>
			<button onClick={() => runMatch()}>Run Match Round</button>
			<pre>{JSON.stringify(match, null, 4)}</pre>
		</div>
	);
}
