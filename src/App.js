
import React from 'react';
import Dashboard from './components/Dashboard';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <ChatAssistant />
    </div>
  );
}

export default App;
