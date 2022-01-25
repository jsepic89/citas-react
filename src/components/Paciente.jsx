import React from 'react'

const Paciente = ({ pacientes, setPaciente, eliminarPaciente }) => {

    const { name, propietario, email, date, sintomas, id } = pacientes

    const handleDelete = () => {
        const respuesta = confirm("Deseas eliminar el paciente?")
        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className="bg-white m-3 shadow-sm px-5 py-10 rounded-md">
                <p className="font-bold uppercase mb-3">Nombre: {""}
                    <span className="font-normal normal-case">{name}</span>
                </p>
                <p className="font-bold uppercase mb-3">Nombre del dueño: {""}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold uppercase mb-3">E-mail: {""}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold uppercase mb-3">Fecha de ingreso: {""}
                    <span className="font-normal normal-case">{date}</span>
                </p>
                <p className="font-bold uppercase mb-3">Síntomas: {""}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
                <button
                    className="py-2 px-5 bg-indigo-400 hover:bg-indigo-700 hover:cursor-pointer text-white rounded-md uppercase"
                    onClick={() => setPaciente(pacientes)}
                    >
                    Editar
                </button>{" "}
                <button
                    className="py-2 px-5 bg-red-400 hover:bg-red-700 hover:cursor-pointer text-white rounded-md uppercase"
                    onClick={handleDelete}
                    >
                    Eliminar
                </button>
            </div>
    )
}

export default Paciente
