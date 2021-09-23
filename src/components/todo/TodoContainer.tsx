import React, { useState } from 'react';
import Todo from '../../models/Todo';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const TodoContainer = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    /**
     * Add a new todo to the todo list
     * @param todo a todo of type <Todo>
     */
    const addNewTodo = (todo: Todo) => {
        setTodos([todo, ...todos]);
    }

    /**
     * Delete a todo from the todo list
     * @param todo a todo of type <Todo>
     */
    const deleteTodo = (todo: Todo) => {
        console.log(todo);
        setTodos(todos.filter((t) => t.task !== todo.task))
    }

    return (
        <div>
            <CreateTodo onCreatedTodo={addNewTodo}/>
            <TodoList todos={todos} onDeletedTodo={deleteTodo}/>
        </div>
    );
};

export default TodoContainer;