import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
					{/* <Route element={<EmptyPage />} /> */}
				</Routes>
			</div>
		</BrowserRouter >
	);
}

export default App;
