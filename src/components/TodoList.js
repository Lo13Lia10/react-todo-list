import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    //Add a task to the to-do list
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

        console.log(todo, ...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id) //Vérifie que la tâche est dans la todo list

        setTodos(removeArr)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos)
    };

    return (
        <div>
            <h1>To-Do List of the day</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default TodoList