import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User/Employee' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
        <TextInput label='Role' source='role' />
        <TextInput label='Organization' source='organization' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit