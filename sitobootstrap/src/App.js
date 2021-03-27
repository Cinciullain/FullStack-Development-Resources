/* eslint-disable no-unused-vars */
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';

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
			{/*Path: della pagina, arbitrario
			   Component: sostituisce la chiamata a Home.js nel wrapper di <Home/>*/}
			<Route
				path = "/" 
				component = {Home}
			/>
		</PageWrapper>
	</Router>
  );
}

export default App;
