import Todo from '../../models/Todo';

type TodoDetailProps = Todo

const TodoItem = ({ task, done }: TodoDetailProps) => {
    return (
        <div>
            <input type="checkbox" checked={done}/> {task}
        </div>
    );
};

export default TodoItem;