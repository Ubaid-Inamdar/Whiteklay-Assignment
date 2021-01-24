import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import RolesList from './components/RolesList'
import RolesCreate from './components/RolesCreate'
import RolesEdit from './components/RolesEdit'
import OrganizationCreate from './components/OrganizationCreate'
import OrganizationList from './components/OrganizationList'
import OrganizationEdit from './components/OrganizationEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='Users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <Resource
        name='Roles'
        list={RolesList}
        create={RolesCreate}
        edit={RolesEdit}
      />
       <Resource
        name='Organization'
        list={OrganizationList}
        create={OrganizationCreate}
        edit={OrganizationEdit}
      />
    </Admin>
  )
}

export default App;