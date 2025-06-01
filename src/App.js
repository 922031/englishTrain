import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './MainApp';
import EnglishTrain from './EnglishTrain';
import Mistakes from './Mistakes';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<MainApp />} />
					<Route path="/EnglishTrain" element={<EnglishTrain />} />
					<Route path="/Mistakes" element={<Mistakes />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
