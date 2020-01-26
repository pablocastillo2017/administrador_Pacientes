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

        const actualizarState = () =>{
            console.log("Escribiendo...");
        }

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


        />
        
        <label>Nombre Propietario</label>
        <input
        type ="text"
        name ="propietario"
        className="u-full-width"
        placeholder="Ingrese Nombre del  Propietario"
        onChange ={actualizarState}

        />

        <label>Fecha</label>
        <input
        type ="date"
        name ="fecha"
        className="u-full-width"
        onChange ={actualizarState}


        />

        <label>Hora</label>
        <input
        type ="time"
        name ="hora"
        className="u-full-width"
        onChange ={actualizarState}

        />

        <label>Síntomas</label>
      
        <textarea
        className="u-full-width"
        name="sintomas"
        placeholder="Detalle Los Síntomas de su Mascota"
        onChange ={actualizarState}

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

