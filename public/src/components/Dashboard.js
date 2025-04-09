
import React from 'react';

function Dashboard({ user }) {
  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome to BuildCraft!</h2>
      <p>User ID: {user.uid}</p>
    </div>
  );
}

export default Dashboard;
