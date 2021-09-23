import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Todo from '../../models/Todo';

type CreateTodoProps = {
    onCreatedTodo: (todo: Todo) => void;
}

const CreateTodo = ({ onCreatedTodo }: CreateTodoProps) => {

    const [todo, setTodo] = useState<Todo>({
        task: '',
        done: false
    });

    /**
     * 
     * @param event
     */
    const createTodo: ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            task: event.target.value
        })
       /*  setTodo({
            task: '',
            done: false
        }); */
    }

    return (
        <div>
            <input value={todo.task} onChange={createTodo}/>
            <button onClick={() => onCreatedTodo(todo)}>+</button>
        </div>
    );
};

export default CreateTodo;