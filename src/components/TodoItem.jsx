import React from 'react';

function TodoItem({ todo, toggleTodo }) {
  return (
    <div 
      className="glass-card"
      onClick={() => toggleTodo(todo.id)}
      style={{ 
        padding: '1.25rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        borderLeft: todo.completed ? '4px solid var(--success)' : '4px solid var(--error)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Custom Checkbox */}
        <div style={{ 
          width: '20px', 
          height: '20px', 
          borderRadius: '6px', 
          border: '2px solid' + (todo.completed ? ' var(--success)' : ' var(--glass-border)'),
          background: todo.completed ? 'var(--success)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {todo.completed && <span style={{ color: 'white', fontSize: '12px' }}>✓</span>}
        </div>
        
        {/* Title */}
        <span style={{ 
          fontSize: '1rem',
          fontWeight: '500',
          color: todo.completed ? 'var(--text-secondary)' : 'var(--text-primary)',
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.6 : 1,
          transition: 'var(--transition)'
        }}>
          {todo.title}
        </span>
      </div>

      {/* Badge */}
      <span className={`badge ${todo.completed ? 'badge-completed' : 'badge-pending'}`}>
        {todo.completed ? 'Done' : 'In Progress'}
      </span>
    </div>
  );
}

export default TodoItem;