import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
/**
 * REST API
 * 
 * Create : POST
 * Read: GET
 * Update : PUT
 * Delete : DELETE
 */

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* 공통부분 */}
				<Header />

				{/* 변경부분 */}
				<Routes>
					<Route exact path="/" element={<DayList />} />
					<Route path="/day/:day" element={<Day />} />
					<Route path="/create_word" element={<CreateWord />} />
					<Route path="/create_day" element={<CreateDay />} />
				</Routes>
			</div>
		</BrowserRouter >
	);
}

export default App;
