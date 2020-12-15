import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { Flex } from '@rebass/emotion'
import { AuthContext } from '../../contexts/authContext'

const NavList = styled.ul`
  display: flex;
  padding-top: 1em;
  margin: 0 3em 0 3em;

  .active {
    font-weight: bold;
  }
  li {
    margin: 0 1em 0 1em;
  }
  a {
    color: darkcyan;
  }
  li:last-child {
    margin-left: auto;
    a {
      color: white;
      margin-left: 2em;
    }
  }
`;

const Nav = () => {
	const auth = useContext(AuthContext)
	return (
		<NavList>
			<li>
				<NavLink exact activeClassName='active' to='/'>
					Explore Photos
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName='active' to='/add'>
					Add Photos
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName='active' to='/mine'>
					My Photos
				</NavLink>
			</li>

			<li>
				<NavLink activeClassName='active' to='/locator'>
					Locator
				</NavLink>
			</li>

			<li>
			{ auth ?
				<Flex color='darkcyan'>
					Hi, {auth}!
					<a href='auth/logout'>
						Log Out
					</a>
				</Flex>
				: <NavLink activeClassName='active' to='/logIn'>
						Log In
					</NavLink>
			}
			</li>
		</NavList>
	)
}

// Nav.propTypes = {
//   logged: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isUser: PropTypes.bool.isRequired,
// }

export default Nav
