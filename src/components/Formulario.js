import React,{Fragment} from 'react'

//sfc snippet
const Formulario = () => (
 <Fragment>
     <h2>Crear Cita</h2>

     <form>
        <label>Nombre Mascota</label>
        <input
        type ="text"
        name ="mascota"
        className="u-full-width"
        placeholder="Ingrese Nombre Mascota"


        />
        
        <label>Nombre Propietario</label>
        <input
        type ="text"
        name ="propietario"
        className="u-full-width"
        placeholder="Ingrese Nombre del  Propietario"

        />

        <label>Fecha</label>
        <input
        type ="date"
        name ="fecha"
        className="u-full-width"


        />

        <label>Hora</label>
        <input
        type ="time"
        name ="hora"
        className="u-full-width"

        />

        <label>Síntomas</label>
      
        <textarea
        className="u-full-width"
        name="sintomas"
        placeholder="Detalle Los Síntomas de su Mascota"
        ></textarea>

        <button
        type= "submit"
        className="u-full-width  button-primary"

        >Agregar Cita</button>

     </form>


 </Fragment>
)
 
export default Formulario;

