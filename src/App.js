import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Form from './components/Form';


const initialTodos = [

    {
        id: 1,
        title: 'ToDo #1',
        desc: 'ToDo #1 Desc',
        completed: false
    },

    {
        id: 2,
        title: 'ToDo #2',
        desc: 'ToDo #2 Desc',
        completed: true
    }

];

const App = () => {

    //Solo dentro del componente se peden utilizar Hooks, por eso hago useState acá
    //const state = useState(initialTodos);
    //useState devuelve un array con 2 posiciones. En la primera posición, está el estado en sí
    //mismo, en la posición 2, una función que actualiza dicho estado.
    //const todos = state[0];
    //const setTodos = state [1];
    //o escrito de otra manera:
    const [todos, setTodos] = useState(initialTodos);
    //o let [todos, setTodos] = useState(initialTodos); directamente
    //esto sería hacer desestructuring del array que devuelve useState.
    const [toDoEdit, setToDoEdit] = useState(null);

    const addToDo = (todo) => {

        /*
        let i = 0;
        todos.map(td => i++);
        */
        //var id = 2;
        const newToDo = {
            id: Date.now(),
            //id: id++,
            ...todo,
            completed: false
        }

        const changedToDo = {
            newToDo,
            ...todos
        }

        setTodos(changedToDo);
    };

    const finishedTask = (todoId) => {
        const changedToDo = todos.map(todo => (
            todoId === todo.id ? {
                ...todo,
                completed: !todo.completed
            }
                : todo
        ));

        setTodos(changedToDo);
    };

    const deleteToDo = (todoId) => {

        if (toDoEdit && todoId === toDoEdit.id) {
            setToDoEdit(null);
        }

        const changedToDo = todos.filter(todo => todo.id !== todoId);

        setTodos(changedToDo);
    };

    const toDoUpdate = (todoEdit) => { //todoEdit tiene el id, title, description y complete del todo en edición

        const changedToDo = todos.map(todo => (
            todo.id === todoEdit.id ?
                todoEdit
                : todo
        )) // en las arrow function se usan () para indicar que el resultado de lo que está adentro se devuelve

        setTodos(changedToDo);
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <h1>
                        <ToDoList todos={todos} deleteToDo={deleteToDo} finishedTask={finishedTask}
                            setToDoEdit={setToDoEdit} />
                    </h1>
                </div>
                <div className='col-4'>
                    <h1>
                        <Form addToDo={addToDo} toDoEdit={toDoEdit} setToDoEdit={setToDoEdit} toDoUpdate={toDoUpdate} />
                    </h1>
                </div>
            </div>
        </div> //en lugar de crear un <div> contenedor que pudiera arruinar la maquetación del componente, se puede simplemente usar un Fragment <> </>. Es lo mismo.
    )
}

export default App;