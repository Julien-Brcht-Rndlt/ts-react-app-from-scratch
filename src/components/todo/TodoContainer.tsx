import React, { useState } from 'react';
import Todo from '../../models/Todo';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const TodoContainer = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    /**
     * Add a new todo to todos state (todo list state)
     * @param todo a todo of type <Todo>
     */
    const addNewTodo = (todo: Todo) => {
        setTodos([todo, ...todos]);
    }

    return (
        <div>
            <CreateTodo onCreatedTodo={addNewTodo}/>
            <TodoList todos={todos}/>
        </div>
    );
};

export default TodoContainer;