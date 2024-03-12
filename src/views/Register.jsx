import { Outlet } from "react-router-dom"

export default function Register() {
  return (
    <>
        <h1 className="text-4xl font-black">Registrarse</h1>
        <p>Cree su cuenta llenando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="text-slate-800"
                    >
                        Nombre:
                    </label>
                    <input 
                        type="text"
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                        name="name"
                        placeholder="Escriba su nombre"
                    />
                </div>

            </form>
        </div>
    </>
  )
}
