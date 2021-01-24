import React from 'react'
import { Create, SimpleForm, TextInput, EmailInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User/Employee' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput label='Role' source='role' />
        <TextInput source='organization' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
