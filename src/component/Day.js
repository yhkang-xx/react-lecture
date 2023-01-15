import { useParams } from 'react-router';
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
	const { day } = useParams(); // const day = useParams().day;
	const words = useFetch(`http://localhost:3001/words?day=${day}`);

	return (
		<>
			<h2>Day {day}</h2>
			<table>
				<tbody>
					{words.map(word => (
						<Word word={word} key={word.id} />
					))}
				</tbody>
			</table>
		</>
	);
}
