import React from 'react'
import Paciente from './Paciente'



const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
       
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll mx-5">
            {/* este condicional ternario primero que nada me evalúa que la variable paciente exista, y después, que tenga algo
            si tiene algo, me va a renderizar el primer bloque de html, si no, el segundo */}
            {pacientes && pacientes.length ? 
                <>
                  <h2 className="font-black text-xl text-center">Listado Pacientes</h2>
                     <p className="mt-4 mb-3 font-bold text-center">Administra pacientes y turnos</p>

                    { pacientes.map( pacientes => 
                        <Paciente 
                            key={pacientes.id}
                            pacientes={pacientes}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        /> )
                    } 
                </>
            
            :
                <>
                  <h2 className="font-black text-xl text-center">Aun no hay pacientes</h2>
                     <p className="mt-4 mb-3 font-bold text-center">Agrega pacientes y aparecerán acá</p>
                </>
            } 
            
        </div>
    )
}

export default ListadoPacientes
