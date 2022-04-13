// Se puede usar el snipet rafce (ReactArrowFunctionComponent) para crear el esqueleto del componente React
import React from 'react';

const ToDo = ({ todo, deleteToDo, setToDoEdit, finishedTask }) => {
  return (
    <div className='card mt-4'>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.elmhurst.edu%2Fwp-content%2Fuploads%2F2018%2F12%2F5-skills-project-management-degree-elmhurst-college-infographic-thumb-1024x536.jpg&f=1&nofb=1" class="card-img" alt="todo img" />
      <div className="card-img-overlay">
        <div className='card-body'>
          <h3 className='card-title text-right'>
            {todo.title}
            <button
              onClick={() => finishedTask(todo.id)}
              className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-outline-warning'} ml-2`}>
              {todo.completed ? 'Finished' : 'Pending'}
            </button>
          </h3>
          <h4 className='card-text text-right'>
            {todo.desc}
          </h4>
          <hr />
          <div className='d-flex justify-content-end'>
            <button onClick={() => setToDoEdit(todo)} className='btn btn-sm btn-outline-primary mr-2'>
              Edit
            </button>
            <button onClick={() => deleteToDo(todo.id)} className='btn btn-sm btn-outline-danger'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    //Si en el evento onClick paso una función que no recibe argumento, no hay problema en llamarla como
    //onClick={deleteToDo}, por ej. Sin embargo, si la función recibe un argumento (como es el caso acá)
    //se invoca siempre una vez montado el componente y rompe todo.
    //Para que no se rompa debemos llamarla por medio de una arrow function.
  )
}

export default ToDo;