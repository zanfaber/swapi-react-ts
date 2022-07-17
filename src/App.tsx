import Header from './components/Header';
import Router from './routes/Router';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className="mx-auto max-w-7xl">
				<Router />
			</main>
		</>
	);
}

export default App;
