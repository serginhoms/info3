import React, { useState } from "react";
import "./App.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarefa 1", completed: false },
    { id: 2, title: "Tarefa 2", completed: true },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTitle, updatedCompleted) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: updatedTitle, completed: updatedCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} - {task.completed ? "Concluída" : "Pendente"}
            </span>
            <button onClick={() => updateTask(task.id, task.title, !task.completed)}>
              Alternar
            </button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button
          onClick={() => {
            addTask(newTaskTitle);
            setNewTaskTitle("");
          }}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
