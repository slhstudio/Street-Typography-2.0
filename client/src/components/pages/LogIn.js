import styled from '@emotion/styled'
import  { Flex } from '@rebass/emotion'
import { SignInButton } from '../atoms/Button'
import Icon from '../../assets/google_icon.png'

const StyledLogo = styled.img`
  width: 3.5em;
  height: 3.5em;
`

const LogIn = () => {
	return (
		<Flex alignItems='center' justifyContent='center'>
			<a href='/auth/google'>
				<SignInButton>
					<StyledLogo src={Icon}/>
					Sign in with Google
				</SignInButton>
			</a>
		</Flex>
	)
}

export default LogIn
