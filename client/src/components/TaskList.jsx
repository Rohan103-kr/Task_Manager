import React from 'react';
import TaskItem from './TaskItem';
import { PackageOpen } from 'lucide-react';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <PackageOpen size={48} />
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
