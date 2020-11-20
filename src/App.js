import React, { useState, useEffect } from "react";
import API from "./utils/API";
import './App.css';

import Search from "./components/Search";
import Header from "./components/Header";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";

function App() {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  useEffect(() => {
    API.getUsers().then(results => {
      setOriginalUsers(results.data.results);
      setUsers(results.data.results);
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
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <Header headerText="Employee Directory" headerSubText="Search and sort employees by last name."/>
      <Wrapper divName="container">
        <Search handleSearch={handleInputChange} />
        <Table users={users} sort={sortByName}/>
      </Wrapper>
    </div>
  );
};

export default App;
