import React, { useEffect, useState } from "react";
import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(Object.entries(data.users)));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Users</h2>
      <ul>
        {users.map(([id, name]) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
