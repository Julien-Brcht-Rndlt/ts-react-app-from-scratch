import React from 'react'
import Todo from '../../models/Todo'
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[],
    onDeletedTodo: (todo: Todo) => void
}

const TodoList = ({ todos, onDeletedTodo }: TodoListProps) => {
    return (
        <div>
            {
                todos && (
                    todos.map((todo) => <TodoItem key={todo.task} {...todo} onDeletedTodo={onDeletedTodo}/>)
                )
            }
        </div>
    );
};

export default TodoList