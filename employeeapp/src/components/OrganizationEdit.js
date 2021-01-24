import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin'

const OrganizationEdit = (props) => {
  return (
    <Edit title='Edit Organization' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <NumberInput source='sizeOfOrganization' />
        <TextInput source='description' />
      </SimpleForm>
    </Edit>
  )
}
export default OrganizationEdit