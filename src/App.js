import { Routes, Route } from "react-router-dom";
import Card from "./component/card/card-component";
import DetailedComponent from "./component/user-detail/user-detail-component";
import { useState, useEffect } from "react";

import "./App.css";

const CardList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUserData(users));
  }, []);

  return (
    <div className="main-container">
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <Card userData={user} />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<CardList />} />

      <Route
        path="/detailed-component/:id"
        index
        element={<DetailedComponent />}
      />
    </Routes>
  );
};

export default App;
