import React, {useState, useEffect, type JSX} from 'react';

// APIs
const USERS = 'https://68e67e7f21dd31f22cc5e3d6.mockapi.io/users';
const NO_USERS = 'https://68e67e7f21dd31f22cc5e3d6.mockapi.io/nousers';
const INVALID = 'https://68e67e7f21dd31f22cc5e3d6.mockapi.io/doesnt_exist';

interface User {
  id: number;
  name: string;
  profession: string;
}

export default function UsersList(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      setLoading(true);
      setError('');
      
      try {
        const response: Response = await fetch(USERS); // Change URL to test different cases
        
        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
        
        const data: User[] = await response.json();
        
        if (data.length === 0) {
          setError('No users found');
        } else {
          setUsers(data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      
      {!loading && error && <p>{error}</p>}
      
      {!loading && !error && users.length === 0 && <p>No users found</p>}
      
      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.profession}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}