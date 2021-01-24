import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const RolesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='name' />
        <TextField source='description' />
        <EditButton basePath='/Roles' />
        <DeleteButton basePath='/Roles' />
      </Datagrid>
    </List>
  )
}

export default RolesList