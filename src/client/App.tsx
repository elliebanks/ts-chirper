import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
// import Timeline from './Timeline';

const App = () => {

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/"><Home /></Route>
					{/* <Route exact path="/Timeline"><Timeline /></Route> */}

				</Switch>
			</Router>

		</>
	)
}


export default App;
