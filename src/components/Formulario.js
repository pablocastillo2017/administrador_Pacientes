import React,{Fragment ,useState} from 'react'

//sfc snippet
const Formulario = () => {

    // Antes del Return es buen Lugar para Agregar los State

        // CREAR STATE DE CITAS

        const [cita ,actualizarCita] = useState({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });
        
// Funcion que se ejecuta cada vez que el usuario escriba en un input

        const actualizarState = e =>{

            actualizarCita({
                // con spreadOperator se crea una copia y no se re.escriba en la proiedad
                // el Spread sirve tanto como para objetos y arreglos.
                ...cita,
                // se re-escribe la informacion del input dentro de la propie. que corresponda
                [e.target.name] : e.target.value
                // tomamos una copia y reescribimos.
            })
        }

        // EXTRAER LOS VALORES
            // se extraer para evita el cita.mascota cita.fecha etc
        const {mascota,propietario,fecha,hora,sintomas} = cita;

    return (
        <Fragment>
     <h2>Crear Cita</h2>

     <form>
        <label>Nombre Mascota</label>
        <input
        type ="text"
        name ="mascota"
        className="u-full-width"
        placeholder="Ingrese Nombre Mascota"
        onChange ={actualizarState}

        // para resetearlo
        value ={mascota}


        />
        
        <label>Nombre Propietario</label>
        <input
        type ="text"
        name ="propietario"
        className="u-full-width"
        placeholder="Ingrese Nombre del  Propietario"
        onChange ={actualizarState}
        value ={propietario}

        />

        <label>Fecha</label>
        <input
        type ="date"
        name ="fecha"
        className="u-full-width"
        onChange ={actualizarState}
        value ={fecha}


        />

        <label>Hora</label>
        <input
        type ="time"
        name ="hora"
        className="u-full-width"
        onChange ={actualizarState}
        value ={hora}


        />

        <label>Síntomas</label>
      
        <textarea
        className="u-full-width"
        name="sintomas"
        placeholder="Detalle Los Síntomas de su Mascota"
        onChange ={actualizarState}
        value ={sintomas}


        ></textarea>

        <button
        type= "submit"
        className="u-full-width  button-primary"

        >Agregar Cita</button>

     </form>


 </Fragment>
    )
}



 
export default Formulario;

