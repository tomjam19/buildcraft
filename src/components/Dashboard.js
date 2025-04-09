
import React from 'react';

function Dashboard({ projects, activeProjectId, setActiveProjectId, addNewProject }) {
  return (
    <div style={{ width: '30%', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h1>BuildCraft</h1>
      <button onClick={addNewProject}>+ New Project</button>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            style={{
              marginTop: '10px',
              fontWeight: project.id === activeProjectId ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
            onClick={() => setActiveProjectId(project.id)}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
