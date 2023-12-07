import React, { useState } from "react";

const BASE_URL =
  "mysql://testing3:institutoweb@www.cursotesting.com.ar:3306/electroFix";

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    cuit: "",
    telefono: "",
    condicion_iva: "",
    rol: "cliente",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleConfirmar = () => {
    fetch(BASE_URL + "/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      data: "codigo 200. Usuario creado !",
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.error("Error al enviar datos al servidor:", error);
      });
  };

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

  return (
    <div className="formUsuario">
      <h2>Registro de Usuario</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={usuario.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={usuario.contraseña}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cuit">Cuit:</label>
          <input
            type="cuit"
            id="cuit"
            name="cuit"
            value={usuario.cuit}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="telefono"
            id="telefono"
            name="telefono"
            value={usuario.telefono}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="condicion_iva">Condicion de iva:</label>
          <input
            type="condicion_iva"
            id="tcondicion_iva"
            name="condicion_iva"
            value={usuario.condicion_iva}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="button" onClick={handleCancelar}>
            Cancelar
          </button>
          <button type="button" onClick={handleConfirmar}>
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroUsuario;
