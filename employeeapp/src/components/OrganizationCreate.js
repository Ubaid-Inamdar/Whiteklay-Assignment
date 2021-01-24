import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const OrganizationCreate = (props) => {
  return (
    <Create title='Create Roles' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <NumberInput source='sizeOfOrganization' />
        <TextInput source='description' />
      </SimpleForm>
    </Create>
  )
}

export default OrganizationCreate