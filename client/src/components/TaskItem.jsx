import { Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-checkbox-wrapper">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id, !task.completed)}
        />
        <span className="task-text">{task.text}</span>
      </label>
      <button 
        className="btn-delete" 
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <Trash2 size={20} />
      </button>
    </li>
  );
};

export default TaskItem;
