import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task cannot be empty!');
      return;
    }
    setError('');
    onAddTask(text);
    setText('');
  };

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (error) setError('');
        }}
      />
      <button type="submit" className="btn-add">
        <PlusCircle size={20} />
        Add
      </button>
    </form>
  );
};

export default TaskInput;
