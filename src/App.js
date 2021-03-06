import React ,{Fragment,useState ,useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';



function App() {

  // Citas en local Storage
  // localStorage solo almacena stings con JSON.parse convierte el arreglo dentro de un String
   

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }


  // Arreglo de Citas
  // Snipet useS

  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect, para realizar ciertas operaciones cuando el state cambia
  // cada vez que el State cambia se activa el useEffect()
  // siempre hay que pasarle un [], para que se ejecute 1 vez.
  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
}, [citas] );

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{

    guardarCitas([
      // copia del state
  ...citas , cita]);
  }

  // Funcion que elimina una Cita por el ID

  const eliminarCita = id =>{

    // el filtro debe ser por las que queremos dejar en el state
    // por que eso se quedan las que no se filtran cita.id !== id
    // sin son distintas, se filtran y se muestran en la pagina.
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
    //clg para revisar si elimina
    // console.log(id);

  }

  // Mensaje condicional
  // condiciona el mensaje siempre que existan o no citas guardadas en el state

  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administrador Citas'


  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>

    <div className="container"> 
      <div className="row">

        <div className="one-half column">
          <Formulario
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}

              />
            ))}
        </div>

      </div>
    </div>
    </Fragment>
  );
    
}

export default App;
