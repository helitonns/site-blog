type UserListProps = {
  id: number;
  name: string;
}

async function fetcherUsers(): Promise<UserListProps[]> {
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve([
        {id:1, name: "Alice"},
        {id:2, name: "Bob"},
      ])
    }, 3000);
  });
}

async function UserList(){
  const userList = await fetcherUsers();

  return(
    <div className="mt-20 text-gray-100">
      {userList.map((user)=> (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default function UserPage(){

  return(
    <>
      <h2>User List</h2>
      <UserList />
    </>
  );
}