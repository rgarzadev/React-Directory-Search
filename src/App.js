import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

import Search from "./components/Search";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {

  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us")
      .then((res) => {
        setOriginalUsers(res.data.results);
        setUsers(res.data.results);
      });
  }, []);

  let sortByName = () => {
    users.sort(function (a, b,) {
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
      <Header headerText="Employee Directory" headerSubText="Search and sort employees by last name."/>
      <Search handleSearch={handleInputChange} />
      <Table users={users} sort={sortByName}/>
    </div>
  );
}

export default App;
