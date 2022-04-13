import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//recibe dos parámetros: el componente o js/jsx que querémos cargar y el selector de la etiqueta donde querémos cargarlo. 
ReactDOM.render(
    <App />,
    document.querySelector('#root') //le pasamos el id del div donde querémos que se inserte lo
    //que tenemos en el primer parámetro. En este caso, el div con id 'root' lo tenemos en el index.html
)