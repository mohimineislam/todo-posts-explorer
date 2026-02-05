import { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem'; // Import the new component

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setTodos(data.slice(0, 20)); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() === "") {
      alert("Please enter a todo title!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false
    };
    setTodos([newTodo, ...todos]);
    setNewTodoTitle("");
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="app-container"><p>Loading todos...</p></div>;
  if (error) return <div className="app-container"><p style={{ color: 'var(--error)' }}>Error: {error}</p></div>;

  return (
    <div className="todos-page">
      <div className="page-header" style={{ marginBottom: '2rem' }}>
        <h2>Task Master</h2>
        <p className="subtitle" style={{ color: 'var(--text-secondary)' }}>Manage your daily productivity with ease.</p>
      </div>

      <div className="todo-controls" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 300px', gap: '2rem', alignItems: 'start', marginBottom: '3rem' }}>
        {/* Create Todo Card */}
        <section className="glass-card">
          <h3>Create New Task</h3>
          <form onSubmit={handleAddTodo} style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
              />
              <button type="submit" className="btn-primary">
                Add Task
              </button>
            </div>
          </form>
        </section>

        {/* Search Card */}
        <section className="glass-card">
          <h3>Filter Tasks</h3>
          <div style={{ marginTop: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </section>
      </div>

      <div className="todo-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* --- USE THE NEW COMPONENT HERE --- */}
        {filteredTodos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleTodo={toggleTodo} 
          />
        ))}

        {filteredTodos.length === 0 && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)' }}>No tasks found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todos;