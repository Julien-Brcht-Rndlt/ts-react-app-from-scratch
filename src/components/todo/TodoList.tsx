import React from 'react'
import Todo from '../../models/Todo'
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <div>
            {
                todos && (
                    todos.map((todo) => <TodoItem key={todo.task} {...todo}/>)
                )
            }
        </div>
    );
};

export default TodoList