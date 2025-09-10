import React, { useState } from "react";
import "./Todolist.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateNote, setDateNote] = useState("");
  const [dateNotes, setDateNotes] = useState({});

  const addTodo = (text) => {
    if (text.trim() !== "") {
      setTodos([...todos, { text, completed: false }]);
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  const handleDayClick = (day) => {
    const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateKey);
    setDateNote(dateNotes[dateKey] || "");
  };

  const handleSaveNote = () => {
    if (selectedDate) {
      setDateNotes({ ...dateNotes, [selectedDate]: dateNote });
      setSelectedDate(null);
      setDateNote("");
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>

      <div className="content-wrapper">
        <div className="todo-section">
          <div className="input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              className="todo-input"
            />
            <button onClick={handleAdd} className="add-btn">
              Add
            </button>
          </div>

          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`todo-item${todo.completed ? " completed" : ""}`}
              >
                <span onClick={() => toggleTodo(index)} className="todo-text">{todo.text}</span>
                <button onClick={() => deleteTodo(index)} className="delete-btn">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="calendar-container">
          <h3 className="calendar-title">📅 Calendar</h3>
          <div className="calendar-header">
            <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="nav-btn">‹</button>
            <h4>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
            <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="nav-btn">›</button>
          </div>
          <div className="calendar-grid">
            {daysInMonth.map(day => {
              const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const note = dateNotes[dateKey];
              return (
                <div key={day} className="calendar-day" onClick={() => handleDayClick(day)}>
                  {day}
                  {note && <div className="day-note">•</div>}
                </div>
              );
            })}
          </div>
          {selectedDate && (
            <div className="note-input-section">
              <input
                type="text"
                value={dateNote}
                onChange={(e) => setDateNote(e.target.value)}
                placeholder="Add note for selected date..."
                className="note-input"
              />
              <button onClick={handleSaveNote} className="save-note-btn">Save</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

