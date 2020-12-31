import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import Loading from '../atoms/Loading';
import { findAllPhotos } from '../../utilities/api'
import PhotoGrid from '../organisms/PhotoGrid';

const Home = () => {
	const [loading, setLoading] = useState(true)
	const [photos, setPhotos] = useState([])
	const [notes, setNotes] = useState([])
	//const [page, setPage] = useState(0)
	const user = useContext(AuthContext)

	useEffect(() => {
		const getAllPhotos = async () => {
			try {
				const allPhotos = await findAllPhotos()
				const notesArray = [], photoArray = []
				allPhotos.data.forEach(item => {
					photoArray.push(item.photo)
					notesArray.push(item.notes)
				});
				setLoading(false)
				setPhotos(photoArray)
				setNotes(notesArray)
			} catch(e) {
					console.log(e)
			}
		}
		getAllPhotos()
		
	
	}, [])
  
    return (
      <div>
        {loading ? <Loading /> : <PhotoGrid photos={photos} notes={notes} />}
      </div>
    )
}


export default Home


