import React, { useState } from "react";

import "./style.scss";

const BASE_URL = "https://electrofix-usuarios-y-roles.onrender.com";

const User = () => {
  const [usuario, setUsuario] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cuit: "",
    telefono: "",
    condicion_iva: "",
    rol:[],
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    if (name === "id" || name === "cuit" || name === "telefono") {
      console.log("CASTING"); 
      value = Number(value);
    }

    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleConfirmar = (e) => {
    e.preventDefault();

    fetch(BASE_URL + "/usuario/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRegisteredUser(data);
      })
      .catch((error) => {
        console.error("Error de petición al servidor:", error);
      });
  };

  const handleRol = (e) => {
    e.preventDefault();

    fetch(BASE_URL + "/usuario/rol", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(usuario.rol),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRegisteredUser(data);
      })
      .catch((error) => {
        console.error("Error de petición al servidor:", error);
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
  /*
  const FormHandler = (e) => {
     e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !password) {
      setError("Por favor complete todos los campos");
      return;
    }
  };
*/
  return (
    <div className="userWraper">
      <h1>Registro de Usuario</h1>

      <form onSubmit={handleConfirmar}>
        <div className="form-group">
          <label htmlFor="id"></label>
          <input
            type="text"
            placeholder="DNI"
            value={usuario.id}
            name="id"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre"></label>
          <input
            type="text"
            placeholder="Nombre"
            value={usuario.first_name}
            name="first_name"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido"></label>
          <input
            type="text"
            placeholder="Apellido"
            value={usuario.last_name}
            name="last_name"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder="Email"
            value={usuario.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña"></label>
          <input
            type="password"
            placeholder="Contraseña"
            value={usuario.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cuit"></label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Cuit"
            value={usuario.cuit}
            name="cuit"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono"></label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="telefono"
            value={usuario.telefono}
            name="telefono"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="condicion_iva"></label>
          <input
            type="text"
            placeholder="condicion_iva"
            value={usuario.condicion_iva}
            name="condicion_iva"
            onChange={handleInputChange}
          />
        </div>



        <div className="form-group">
        <label htmlFor="rol">Rol</label>
        <select
          type="text"
          placeholder="Rol"
          className="RolItem"
          value={usuario.rol}
          name="rol"
          onChange={handleRol}
        >
          <option value="">Seleccionar rol</option>
          <option value={1}>Técnico</option>
          <option value={2}>Administrativo</option>
          <option value={3}>Atención al cliente</option>
        </select>
        </div>



        {/*    {error && <p className="error"> {error} </p>} */}

        <div className="confirm">
          <button type="button" onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="submit" onClick={handleConfirmar}>
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
