//import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const StyledInput = styled.input`
  font-size: inherit;
  border: 0.2rem solid black;
  padding: 2rem;
  ${(props) =>
    props.purpose === 'addForm' &&
    css`
      margin: 1em 20% 1em 20%;
      background: none;
      border: none;
      border-bottom: 0.1rem solid black;
      padding: 2em 2em 1em 0.5em;
      ::placeholder {
        color: #393939;
      }
      &:focus {
        outline: 0;
        border-bottom: 0.1rem solid white;
        ::placeholder {
          color: white;
        }
      }
    `}
  ${(props) =>
    props.purpose === 'editForm' &&
    css`
      margin: 1em 1em 1em 0;
    `}
  ${(props) =>
    props.purpose === 'searchForm' &&
    css`
      background: none;
      width: 50%;
      border: none;
      border-bottom: 0.1rem solid black;
      padding: 4em 2em 1em 0.5em;
      ::placeholder {
        color: #393939;
      }
      &:focus {
        outline: 0;
        border-bottom: 0.1rem solid white;
        ::placeholder {
          color: white;
        }
    `}
`

const InputField = ({ id, type, name, value, placeholder, onChange, purpose, required }) => {
  return (
    <StyledInput
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      purpose={purpose}
      required={required}
    />
  )
}

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   accept: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   onChange: PropTypes.func.isRequired,
//   purpose: PropTypes.string
// };

export default InputField
