import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [name, setName] = useState(""); 
    const [propietario, setPropietario] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [date, setDate] = useState(""); 
    const [sintomas, setSintomas] = useState(""); 

    const [error, setError] = useState(false); //este hook es para manejar los errores


    //ese hook es para cargar los datos que ya usé, al formulario cuando quiero editar un paciente
    useEffect( () => {
        if(Object.keys(paciente).length > 0){ //si el objeto paciente tiene keys, significa que no está vacío
            setName(paciente.name)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setDate(paciente.date)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const idGenerator = () => {
        const random = Math.random().toString(36).substr(2);
        const dateNow = Date.now().toString(36);
        return random + dateNow;
    }

    /* esta es la validación del formulario. Primero hago un preventDefault para que no se envíe en automático cualquier cosa 
    que complete el usuario, y después digo que si algún campo está vacío, me genere una alerta */
const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, propietario, email, date, sintomas].includes("")){
        
        setError(true);
    } else {
        setError(false)

        const objetoPacientes = {
            name,
            propietario,
            email,
            date,
            sintomas
        }

        if(paciente.id){
            objetoPacientes.id = paciente.id
            
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id? objetoPacientes : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({}) //acá limpio el state para que no vaya quedando informacion vieja en memoria
        } else {
            objetoPacientes.id = idGenerator();
            setPacientes([...pacientes, objetoPacientes]);

        }


        // reinicio los campos si todo estuvo OK
        setName("")
        setPropietario("")
        setEmail("")
        setDate("")
        setSintomas("")
    }

}


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-xl text-center">Seguimiento Pacientes</h2>
            <p className="mt-4 mb-3 font-bold text-center">Añade y administra los pacientes acá</p>
            <form className="bg-white p-4 mb-8 rounded-md mx-5" action="" onSubmit={handleSubmit}>
                {/* voy a generar un texto de alerta como primer texto del formulario, solo si error es true */}
                { error && <Error />
                }
                <div className="p-2 mb-3">
                    <label htmlFor="mascota" className="block p-2 uppercase">Nombre de la mascota</label>
                    <input className="block border-2 p-2 mt-2 w-full rounded-md"
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de tu mascota"
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                    />
                </div>
                <div className="p-2 mb-3">
                    <label htmlFor="dueño" className="block p-2 uppercase">Nombre del dueño</label>
                    <input className="block border-2 p-2 w-full rounded-md"
                        id="dueño"
                        type="text" 
                        placeholder="Nombre del dueño"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="p-2 mb-3">
                    <label htmlFor="email" className="block p-2 uppercase">E-mail</label>
                    <input className="block border-2 p-2 w-full rounded-md"
                        id="email"
                        type="email" 
                        placeholder="ejemplo@email.com"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="p-2 mb-3">
                    <label htmlFor="ingreso" className="block p-2 uppercase">Fecha de ingreso</label>
                    <input className="block border-2 p-2 w-full rounded-md"
                        id="ingreso"
                        type="date"
                        value={date}
                        onChange={ (e) => setDate(e.target.value)}
                    />
                </div>
                <div className="p-2 mb-3">
                    <label htmlFor="sintomas" className="block p-2 uppercase">Síntomas</label>
                    <textarea className="block border-2 p-2 w-full rounded-md"
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>
                <div className="p-2 mb-3">
                <input 
                    type="submit"
                    className="block border-2 p-2 w-full rounded-md text-white bg-slate-600 cursor-pointer hover:bg-gray-400 uppercase"
                    value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"} 
                />
                </div>
            </form>
        </div>
    )
}


export default Formulario


