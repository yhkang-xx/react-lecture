import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Word from './Word';


export default function Day() {
	const { day } = useParams(); // const day = useParams().day;
	const [words, setWords] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3001/words?day=${day}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setWords(data);
			});
	}, [day]);	// []는 1회만 실행시키고자 할 때


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
