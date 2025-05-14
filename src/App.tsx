import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header/Header';
import './App.css';
import Hero from './layouts/Hero/Hero';

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<main className='main-content'>
					<Hero />
				</main>
			</div>
		</Router>
	);
}

export default App;
