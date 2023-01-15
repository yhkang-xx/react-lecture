import React from "react";
import { useParams } from 'react-router';
import Word, { IWord } from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
	const { day } = useParams<{ day: string }>(); // const day = useParams().day;
	const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

	return (
		<>
			<h2>Day {day}</h2>
			{words.length === 0 && <span>Loading...</span>}
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
