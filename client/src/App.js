import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { Theme } from './styles/settings'
import { GlobalStyles } from './styles/global'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/atoms/ProtectedRoute'
import { AuthProvider } from './contexts/authContext'
import { PhotoProvider } from './contexts/photoContext'
import Nav from './components/organisms/Nav'
import Home from './components/pages/Home'
import Add from './components/pages/Add'
import Mine from './components/pages/Mine'
import Photo from './components/organisms/Photo'
import LogIn from './components/pages/LogIn'
import Locator from './components/pages/Locator'

const Container = styled.div`
  max-width: ${props => props.theme.containerWidth};
  color: ${props => props.theme.black};
  margin: 0 auto;
  height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: ${props => props.theme.contentContainerWidth};
  margin: 0 auto;
  padding: 0 3em 0 3em;
`;

const App = () => {
	return (
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyles} />
			<AuthProvider>
				<Router>
					<Container>	
						<Nav />
						<ContentContainer>
						<PhotoProvider>
							<Switch>
									<Route exact path='/'>
										<Home />
									</Route>
									<ProtectedRoute path='/add'>
										<Route>
											<Add />
										</Route>
									</ProtectedRoute>
									<ProtectedRoute path='/mine'>
										<Route>
											<Mine />
										</Route>
									</ProtectedRoute>
									<Route path='/photo/:photo'>
										<Photo />
									</Route>
									<Route path='/locator'>
										<Locator />
									</Route>
							
								<Route path='/logIn'>
									<LogIn />
								</Route>
							</Switch>
							</PhotoProvider>
						</ContentContainer>
					</Container>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
