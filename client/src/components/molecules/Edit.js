import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Flex, Text } from '@rebass/emotion'

import { uploadChanges, deletePhoto } from '../../utilities/api'
//import PropTypes from 'prop-types';
import InputField from '../atoms/Input'
import { BaseButton } from '../atoms/Button'

const Edit = ({ info, photo }) => {
  // static propTypes = {
  //   info: PropTypes.string,
  //   photo: PropTypes.string.isRequired
  // };
  const [notes, setNotes] = useState(info)
  const [editing, setEditing] = useState(false)
  const [deleted, setDeleted] = useState(false)

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setUpdate(() => ({ update : value }));
  // }

  // handleClick = () => {
  //   this.setState (() => ({ editing : true }));
  // }

  const saveChanges = async () => {
    const change = await uploadChanges(notes, photo)
    setEditing(false)
  }

  const removePhoto = async (error) => {
    const remove = await deletePhoto(photo)
    setDeleted(true)
  }
  console.log('notes', notes)
  return (
    <>
      {deleted ? (
        <Redirect to="/mine" />
      ) : (
        <Flex>
          {!editing ? (
            <>
              <Text mt={'2em'} mr={'2em'}>
                Notes: {notes}
              </Text>
              <BaseButton data-test="test1" onClick={() => setEditing(true)}>
                EDIT
              </BaseButton>
            </>
          ) : (
            <>
              <InputField
                type="text"
                name="notes"
                value={notes}
                placeholder="Add some notes"
                onChange={(e) => setNotes(e.target.value)}
                purpose={'editForm'}
              />
              <BaseButton data-test="test2" onClick={saveChanges}>
                SAVE
              </BaseButton>
            </>
          )}
          <BaseButton data-test="test3" onClick={removePhoto}>
            DELETE
          </BaseButton>
        </Flex>
      )}
    </>
  )
}

export default Edit
