import React, { useState } from "react";

import "./style.scss";

const BASE_URL = "https://electrofix-usuarios-y-roles.onrender.com/";

const User = () => {
  
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    cuit: '',
    telefono: '',
    condicion_iva: '',
//    rol: "cliente",
  });



  const handleInputChange = (e) => {
//    const { placeholder, value } = e.target;
 //   setUsuario({ ...usuario, [placeholder]: value });

   console.log(e);
  };

  const handleConfirmar = () => {

    
 fetch(BASE_URL + "/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(usuario),
    })

    .then(response => response.json())
    .then(data => {
      console.log(data);
      setRegisteredUser(data);
    })
    .catch(error => {
      console.error('Error de petición al servidor:', error);
    });
};



  const handleCancelar = () => {
    setUsuario({
      nombre: "",
      apellido: "",
      email: "",
      contraseña: "",
      cuit: "",
      telefono: "",
      condicion_iva: "",
      rol: "cliente",
    });
  };

  const FormHandler = (e) => {
     e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !password) {
      setError("Por favor complete todos los campos");
      return;
    }
  };

  return (
    <div className="userWraper">
      
        <h1>Registro de Usuario</h1> 

      <form onSubmit={handleConfirmar}>
        <div className="form-group">
          <label htmlFor="nombre"></label>
          <input
            type="text"
            placeholder="Nombre"
            value={usuario.nombre}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido"></label>
          <input
            type="text"
            placeholder="Apellido"
            value={usuario.apellido}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder="Email"
            value={usuario.email}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña"></label>
          <input
            type="text"
            placeholder="Contraseña"
            value={usuario.contraseña}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuit"></label>
          <input
            type="text"
            placeholder="Cuit"
            value={usuario.cuit}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono"></label>
          <input
            type="text"
            placeholder="telefono"
            value={usuario.telefono}
            onChange={handleInputChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="condicion_iva"></label>
          <input
            type="text"
            placeholder="condicion_iva"
            value={usuario.condicion_iva}
            onChange={handleInputChange} 
          />
        </div>

   {/*    {error && <p className="error"> {error} </p>} */} 

        <button type="button" onClick={handleCancelar}>
          Cancelar
        </button>
        <button type="submit" onClick={handleConfirmar}>
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default User;
