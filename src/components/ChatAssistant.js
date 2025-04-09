
import React, { useState } from 'react';
import sendPrompt from '../chatgpt';

function ChatAssistant({ activeProjectId, messages, setMessages }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const response = await sendPrompt(newMessages);
    setMessages([...newMessages, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <div style={{ width: '70%', padding: '20px' }}>
      <h2>AI Assistant</h2>
      <div style={{ maxHeight: '75vh', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div><em>AI is thinking...</em></div>}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe what you want to change..."
        style={{ width: '80%', marginRight: '10px' }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatAssistant;
