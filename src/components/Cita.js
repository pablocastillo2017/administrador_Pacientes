import React from 'react';

const Cita = ({cita ,eliminarCita}) => (
    
    <div className="cita">
    
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>propietario: <span>{cita.propietario}</span></p>
    <p>fecha: <span>{cita.fecha}</span></p>
    <p>hora: <span>{cita.hora}</span></p>
    <p>sintomas: <span>{cita.sintomas}</span></p>

            <button
            type="submit"
            className="button eliminar u-full-width"
// si se coloca de esta forma eliminarCita() , se esta llamando a la funcion
// debe ser una arrow funcion para que espera el click ()=>{}
            onClick={()=> eliminarCita(cita.id)}
            >Eliminar &times;</button>

    </div>
);
 
export default Cita;