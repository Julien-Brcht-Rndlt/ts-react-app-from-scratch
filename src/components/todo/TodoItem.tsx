import Todo from '../../models/Todo';

type TodoDetailProps = Todo & {
    onDeletedTodo: (todo: Todo) => void
}

const TodoItem = ({ task, done, onDeletedTodo }: TodoDetailProps) => {
    return (
        <div>
            <input type="checkbox" checked={done} onChange={()=>{}}/> {task} <button onClick={() => onDeletedTodo({task, done})}>X</button>
        </div>
    );
};

export default TodoItem;