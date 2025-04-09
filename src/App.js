
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [messages, setMessages] = useState([]);

  const addNewProject = () => {
    const newProject = {
      id: Date.now(),
      name: `Project ${projects.length + 1}`,
      createdAt: new Date().toLocaleString(),
    };
    setProjects([...projects, newProject]);
    setActiveProjectId(newProject.id);
    setMessages([]);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Dashboard
        projects={projects}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        addNewProject={addNewProject}
      />
      <ChatAssistant
        activeProjectId={activeProjectId}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;
