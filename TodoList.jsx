import { useHandleTodoTask } from "../hooks/useHandleTodoTask";

const TodoList = () => {
    
    const {todos, task, handleNewTask, handleSubmit, handleRemoveTask, handleUpdateTask, handleRemoveAllTask} = useHandleTodoTask();
    
    return (
        <div className="mb-16">
            <form onSubmit={handleSubmit} className="text-xl">
                Add Task :
                <input className="ml-5 outline-none" value={task} placeholder="Add with enter" onChange={handleNewTask} />
            </form>
            <ul className="mb-16">
                {todos.map((todo, index) => (
                    <li className="text-lg m-8"
                    key={index}
                    style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                    }}
                    >
                        <input className="mr-5"
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => handleUpdateTask(index)}
                        />
                        {todo.task}
                        <button className="ml-5"
                        onClick={() => handleRemoveTask(index)}
                        style={{ cursor: 'pointer'}}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <button className="text-xl" onClick= {handleRemoveAllTask}>Clear</button>
        </div>
    );
};

export default TodoList;
