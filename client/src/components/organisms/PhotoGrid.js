import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Grid = styled.ul`
  /*  Here is the fallback layout. It works in every browser,
  even those that don't understand '@supports'. */
    max-width: 500px;
    margin: 0 auto;
  
  @supports (display: grid) {
    /* Undo the fallback layout.  */
    max-width: none;
    
    /* Create the Grid-based layout.   */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 1em;
    margin: 1em auto;
`

const GridItem = styled.img`
  /* fallback */
    margin: .2rem 0;
    max-width: 100%;

  @supports (display: grid) {
    /* Undo the fallback layout.  */
    margin: 0;
      
    /* Create the Grid-based layout.   */
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`

const PhotoGrid = ({ photos }) => {
  return (
    <Grid>
      {photos.map((item, index) => {
        return (
          <li key={index}>
            <Link to={`/photo/${item.photo}`}>
              <GridItem
                src={`/uploads/${item.photo}`}
                alt={`street typography image: ${item.notes}`}
              />
            </Link>
          </li>
        )
      })}
    </Grid>
  )
}

export default PhotoGrid
