import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

//sfc snippet
const Formulario = () => {

// Antes del Return es buen Lugar para Agregar los State

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [ error, actualizarError ] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input

    const actualizarState = e => {
        
        actualizarCita({
// con spreadOperator se crea una copia y no se re.escriba en la proiedad
// el Spread sirve tanto como para objetos y arreglos.
            ...cita,

// se re-escribe la informacion del input dentro de la propie. que corresponda
            [e.target.name]: e.target.value 
        })
    }

    // EXTRAER LOS VALORES
// se extraer para evita el cita.mascota cita.fecha etc
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona "Agregar Cita"
    const submitCita = e => {

        // para prevenir el query sting en la barra de direeciones web
        e.preventDefault();

// Validar ,este if cumple que con el metodo trim() cualquier espacio en 
// blanco lo va a eliminar  
        if(mascota.trim() === '' || propietario.trim() === ''  || fecha.trim() === ''  || hora.trim() === ''  || sintomas.trim() === '' ){
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje previo 
        actualizarError(false);

        // Asignar un ID
        cita.id = uuid();
        
        // Crear la cita

        // Reiniciar el form

    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre  Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

 
export default Formulario;

