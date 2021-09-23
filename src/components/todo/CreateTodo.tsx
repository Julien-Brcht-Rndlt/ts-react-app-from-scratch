import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import Todo from '../../models/Todo'

type CreateTodoProps = {
    onCreatedTodo: (todo: Todo) => void
}

const CreateTodo = ({ onCreatedTodo }: CreateTodoProps) => {
    
    const INITIAL_TODO_STATE = {
        task: '',
        done: false
    }

    const [todo, setTodo] = useState<Todo>(INITIAL_TODO_STATE)

    const createNewTodo: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            task: event.target.value
        })
    }
    
    return (
        <div>
            <input value={todo.task} onChange={createNewTodo}/>
            <button onClick={() => onCreatedTodo(todo)}>+</button>
        </div>
    );
};

export default CreateTodo