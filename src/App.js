import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';

import UserRow from "./components/UserRow";

function App() {

  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  useEffect(() => {
      axios.get("https://randomuser.me/api/?results=10&nat=us")
      .then((res) => {
        setOriginalUsers(res.data.results);  
        setUsers(res.data.results);
      });
  },[]);

  let sortByName = () => {
    users.sort(function(a, b,){
      return a.name.last.localeCompare(b.name.last);
    });
    setUsers([...users]); 
  };

  let handleInputChange = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let filteredUsers = originalUsers.filter(user => user.name.last.toLowerCase().includes(searchTerm));
    setUsers([...filteredUsers]);
  }

  return (
    <div className="App">
      <table>
        <tr>
          <td>image</td>
          <td>name<button onClick={sortByName}>Sort</button></td>
          <td>phone</td>
          <td>email</td>
          <td>DOB</td>
        </tr>
        {users.map((user) => {
          return (
            <UserRow user={user} />
          )
        })}
      </table>
      <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search users"
          id="term"
        />
    </div>
  );
}

export default App;
