import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Sparkles } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks on initial load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    // Optimistic update
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed } : task
    ));

    try {
      await axios.put(`${API_URL}/${id}`, { completed });
    } catch (error) {
      console.error('Error updating task:', error);
      // Revert on failure
      fetchTasks();
    }
  };

  const handleDeleteTask = async (id) => {
    // Optimistic update
    setTasks(tasks.filter(task => task.id !== id));

    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting task:', error);
      // Revert on failure
      fetchTasks();
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">
        TaskMaster <Sparkles size={32} style={{ color: '#f472b6', verticalAlign: 'middle', marginLeft: '8px' }} />
      </h1>
      
      <TaskInput onAddTask={handleAddTask} />
      
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <TaskList 
          tasks={tasks} 
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}

export default App;
