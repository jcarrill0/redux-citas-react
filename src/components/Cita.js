import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citasAction';

const Cita = ({cita}) => {

    const {id, mascota, propietario, fecha, hora, sintomas } = cita;

    // Dispatch para action de eliminar cita
    const dispatch = useDispatch();

    return ( 
        <div className="media mt-3">
            <div className="media-body">
                <h3 className="mt-0">{mascota}</h3>
                <p className="card-text"><span>Nombre Dueño: </span>{propietario}</p>
                <p className="card-text"><span>Fecha: </span>{fecha}</p>
                <p className="card-text"><span>Hora: </span>{hora}</p>
                <p className="card-text"><span>Sintomas:</span> <br />{sintomas}</p>
                <button
                    onClick={ () => dispatch(borrarCitaAction(id)) } 
                    className="btn btn-danger">Borrar &times; 
                </button>
            </div>
        </div>
     );
}
 
export default Cita;