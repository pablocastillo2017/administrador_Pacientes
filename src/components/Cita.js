import React from 'react';

const Cita = ({cita}) => (
    
    <div className="cita">
    
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>propietario: <span>{cita.propietario}</span></p>
    <p>fecha: <span>{cita.fecha}</span></p>
    <p>hora: <span>{cita.hora}</span></p>
    <p>sintomas: <span>{cita.sintomas}</span></p>


    </div>
);
 
export default Cita;