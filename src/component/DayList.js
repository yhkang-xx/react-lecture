import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function DayList() {
	const [days, setDays] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/days")
			.then(res => {
				return res.json();
			})
			.then(data => {
				setDays(data);
			});
	}, []);	// []는 1회만 실행시키고자 할 때


	return (
		<>
			<ul className="list_day">
				{days.map(day => (
					<li key={day.id}>
						<Link to={`/day/${day.day}`}>Day {day.day}</Link>
					</li>
				))}
			</ul>
		</>
	);
}