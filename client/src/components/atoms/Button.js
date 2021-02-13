import styled from '@emotion/styled'
import { Button } from '@rebass/emotion'

export const BaseButton = styled(Button)`
  display: flex;
  font-size: inherit;
  justify-content: center;
  padding: 2rem;
  margin: 1em 0.5em 1em 0.5em;
  border: 0.15rem solid #393939;
  background: none;
`

export const SignInButton = styled(BaseButton)`
  align-items: center;
  background-color: white;
  margin: 7em 1em 1em 1em;
  padding: 0 2em 0 1em;
  border: none;
  &:hover {
    border: .2rem solid #4285F4;
`
