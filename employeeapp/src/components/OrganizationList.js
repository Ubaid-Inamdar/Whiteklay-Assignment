import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const OrganizationList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <NumberField source='sizeOfOrganization' />
        <TextField source='description' />
        <EditButton basePath='/Organization' />
        <DeleteButton basePath='/Organization' />
      </Datagrid>
    </List>
  )
}

export default OrganizationList