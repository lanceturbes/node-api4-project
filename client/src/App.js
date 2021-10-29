import React from "react";

const App = () => {
  return (
    <div className="app">
      <h1>Lance's Spot</h1>
      <h3>Welcome! This is my first full-stack web application.</h3>
      <h3>You can find my API endpoints listed below:</h3>
      <p>
        Note: These endpoints are currently "dumb" and data is not persistent.
      </p>
      <p>[GET] /api/users -- returns an array of currently registered users</p>
      <p>
        [POST] /api/login -- returns a welcome message for the user logging in
      </p>
      <p>[POST] /api/register -- returns the newly registered user</p>
    </div>
  );
};

export default App;
