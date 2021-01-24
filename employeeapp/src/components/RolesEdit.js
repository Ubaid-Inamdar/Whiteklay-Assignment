import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const RolesEdit = (props) => {
  return (
    <Edit title='Edit Roles' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='description' />
      </SimpleForm>
    </Edit>
  )
}
export default RolesEdit