import TodoList from "./TodoList";
import WeatherCheck from "./WeatherCheck";


const Todo = () => {
    return (
        <div>
            <h1 className='text-4xl mb-16'>Simple Todo</h1>
            <div className='md:flex'>
                <TodoList />
                <WeatherCheck />
            </div>
        </div>
    );
};

export default Todo;