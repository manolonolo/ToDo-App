import { React, useState, useEffect } from 'react';

const initialInput = {
  title: '',
  description: ''
};

const Form = ({ addToDo, toDoEdit, toDoUpdate, setToDoEdit }) => {

  const [input, setInput] = useState(initialInput); //para usar el snipet que carga automaticamente esta estructura se puede escribir solamente useState y ya sugiere usar el snipet
  //se puede hacer desestructuring de lo que devuelve useState para poder llamar directamente las propiedades de objeto initialInput poniendo:
  // let { title, description } = input
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  

  //let dispatch = useDispatch(); descomentar cuando haga falta, hace falta importar useDispatch de react-redux

  useEffect(() => {
    
    if(toDoEdit){
      setInput(toDoEdit);
    }
    else{
      setInput(initialInput);
    }
  }, [toDoEdit]);
  //uso un useEffect mirará el estado del toDoEdit (es decir, si se clickeo o no el botón editar)
  // Para evitar que se ejecute la primera vez que se carga el componente, le meto un condicional
  // que checkee si el botón fué presionado. Para evitar que tire error cuando el estado sea null.
  

  let handleChange = (e) => {

    /*
    const changedInput = {
      ...input,
      [e.target.title] : e.targe.value
    };
    setInput(changedInput);
    */

    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(input.title.trim() === ''){
      setError('Error. A title is required.');
      return; //esto quiere decir que salga del handle submit y no devuelva nada, sin nunca agregar la nueva tarea.
    }

    if(input.description.trim() === ''){
      setError('Error. A description is required.');
      return;
    }

    if(toDoEdit){
      toDoUpdate(input);
      setSuccess('Task edited successfully.');
    }
    else{
      addToDo(input);
      setSuccess('Task added successfully.');
      setInput(initialInput);
    }

    setTimeout(() => {
      setSuccess(null);
    }, 2000);

    setError(null);
    //acá tengo que meter dispatch para usar useDispatch y dispatchear la action que carga la
    //nueva task, pero esperar a ver redux
  };

  return (
    <div>
      <h1>{ toDoEdit ? 'Edit Task' : 'New Task' }</h1>
        { toDoEdit &&
            <button className='btn btn-sm btn-warning mb-2' onClick={ () => setToDoEdit(null) }>Cancel Edit</button>
        }
        <form onSubmit={handleSubmit}>
          <h3>
            Title
            <br />
            <input type='text' className='form-control' placeholder='Title' name='title' value={input.title} onChange={handleChange} />
          </h3>
          <h3>
            Description
            <input type='text' className='form-control mt-2' placeholder='Title' name='description' value={input.description} onChange={handleChange} />
          </h3>
          <button type='submit' className='btn btn-primary btn-block mt-2'>{ toDoEdit ? 'Update' : 'Add Task' }</button>
        </form>
        {
          error
          ? (
            <div className='alert alert-danger mt-2'>
              {error}
            </div>
          ) : null 
        }
        {
          success
          ? (
            <div className='alert alert-success mt-2'>
              {success}
            </div>
          ) : null
          }
    </div>
  )
}

export default Form;