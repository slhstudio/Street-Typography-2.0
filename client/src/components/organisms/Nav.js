import { NavLink } from 'react-router-dom'
//import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

// const Greeting = styled.div.attrs({
//   className: 'greeting'
// })`
//   color: darkcyan;
//   display: flex;
//   flex-direction: row;
// `;

const Nav = () => {
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
				<NavLink activeClassName='active' to='/logIn'>
					Log In
				</NavLink>
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
