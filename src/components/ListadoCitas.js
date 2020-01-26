import React from 'react';
import { useSelector } from 'react-redux';
import Cita from './Cita';


const ListadoCitas = () => {

    // Obtener las citas del state
    const citas = useSelector(state => state.citas);

    // Mensaje condicional
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No Hay Citas' : 'Administrar las Citas Aquí';

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                   { citas.citas.map(cita => (
                       <Cita 
                            key={cita.id}
                            cita={cita}
                       />
                   ))} 
                </div>
            </div>
        </div>
     );
}
 
export default ListadoCitas;