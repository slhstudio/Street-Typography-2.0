import styled from '@emotion/styled'

const StyledImg = styled.img`
  max-width: 100%;
  -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`

const Photo = ({ photo }) => {
  return <StyledImg src={`/uploads/${photo}`} />
}

// Photo.propTypes = {
//   name: PropTypes.string.isRequired,
//   author: PropTypes.string,
//   map: PropTypes.string.isRequired,
//   notes: PropTypes.string,
//   photo: PropTypes.string.isRequired
// }

export default Photo
