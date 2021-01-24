import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const RolesCreate = (props) => {
  return (
    <Create title='Create Roles' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='description' />
      </SimpleForm>
    </Create>
  )
}

export default RolesCreate