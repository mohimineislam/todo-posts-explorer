import React from "react";

function TodoItem({ todo, toggleTodo }) {
  return (
    <div
      className={`glass-card todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <div className="todo-left">
        
        {/* Checkbox */}
        <div className={`todo-checkbox ${todo.completed ? "checked" : ""}`}>
          {todo.completed && <span>✓</span>}
        </div>

        {/* Title */}
        <span className="todo-title">
          {todo.title}
        </span>

      </div>

      {/* Status Badge */}
      <span
        className={`badge ${
          todo.completed ? "badge-completed" : "badge-pending"
        }`}
      >
        {todo.completed ? "Done" : "In Progress"}
      </span>
    </div>
  );
}

export default TodoItem;
