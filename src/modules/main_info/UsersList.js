import useUsersList from '../users/hooks/UseUsers';
import Users from '../users/components/Users'

export default function UsersList() {
  const {list} = useUsersList();
  console.log({list})
  return (
    <div>
      <h1>Users list</h1>
      <Users users={list} />
    </div>
  )
}
