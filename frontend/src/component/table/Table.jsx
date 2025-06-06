import React from "react";
import "./Table.css";

const UserTable = ({ users }) => {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" disabled /></th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Language</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td><input type="checkbox" /></td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.languages.join(", ")}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
