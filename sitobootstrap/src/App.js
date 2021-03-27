/* eslint-disable no-unused-vars */

//Pagine
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

//Import di react router
import{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
  return (
	<Router>
		<PageWrapper>
			{/*Exact: serve per quando c'è solo lo slash nel path
			   Path: della pagina, arbitrario
			   Component: sostituisce la chiamata a Home.js nel wrapper di <Home/>*/}
			<Route
				exact = {true}
				path = "/" 
				component = {Home}
			/>
			<Route
				path = "/about" 
				component = {About}
			/>
		</PageWrapper>
	</Router>
  );
}

export default App;
