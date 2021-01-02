import { useState, useEffect, createContext } from 'react'
import { findAllPhotos } from '../utilities/api'

export const PhotoContext = createContext()

export const PhotoProvider = ({children}) => {
  const [photos, setPhotos ] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
		const getAllPhotos = async () => {
			try {
				const allPhotos = await findAllPhotos()
			  setPhotos(allPhotos.data)
        setLoading(false)
        setError(null)
			} catch(e) {
          console.warn(e.message)
					setError('Please try again.')
			}
		}
		getAllPhotos()
	}, [])
 
  return (
    <PhotoContext.Provider value={{photos, setPhotos, loading}}>
      { children }
    </PhotoContext.Provider>
  )
}