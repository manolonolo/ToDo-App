import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, deleteToDo, setToDoEdit, finishedTask }) => {
    return (
        <div>
            <h1 className='text-right'>
                Task List
            </h1>
            {
                todos.lenght !== '0' ? (
                    todos.map(todo => (
                        <ToDo
                            todo={todo}
                            key={todo.id}
                            deleteToDo={deleteToDo}
                            setToDoEdit={setToDoEdit}
                            finishedTask={finishedTask}
                        />
                    ))
                ) : (
                    <div className='alert alert-warning mt-2'>
                        No pending tasks.
                    </div>
                )
            }
        </div>
    )
};

export default ToDoList;