import React, { useState, useEffect } from 'react';
import '../styles/components/index.scss';

const sobreNosotros = () => {
  
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        direccion: '',
        ciudad: '',
        telefono: '',
        mensaje: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };
  

    const validate = () => {
      const errors = {};
  
      // Validación para el campo Nombre
      if (!formData.nombre) {
          errors.nombre = 'Este campo es obligatorio';
      } else if (/\d/.test(formData.nombre)) {
          errors.nombre = 'Nombre inválido (no debe contener números)';
      }
      
      // Validación para el campo Correo
      if (!formData.correo) {
          errors.correo = 'Este campo es obligatorio';
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.correo)) {
          errors.correo = 'Correo inválido';
      }
  
      // Validación para el campo Dirección
      if (!formData.direccion) {
          errors.direccion = 'Este campo es obligatorio';
      }
  
      // Validación para el campo Ciudad
      if (!formData.ciudad) {
          errors.ciudad = 'Este campo es obligatorio';
      }
  
      // Validación para el campo Teléfono
      if (!formData.telefono) {
          errors.telefono = 'Este campo es obligatorio';
      } else if (!/^\d{10}$/.test(formData.telefono)) {
          errors.telefono = 'Teléfono inválido (debe ser de 10 dígitos)';
      }
  
      // Validación para el campo Mensaje
      if (!formData.mensaje) {
          errors.mensaje = 'Este campo es obligatorio';
      } else if (formData.mensaje.length < 50) {
          errors.mensaje = 'El mensaje debe tener al menos 50 caracteres';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
  };
  

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Formulario enviado:', formData);
        }
    };
  return (
    <>
    <div className="nosotros-seccion">
      <div className="nosotros-seccion__imagen">
        <img src="/imagenes/tenis.png" alt="Frutas y verduras" />
      </div>
      <div className="nosotros-seccion__contenido">
        <h2>¿Quienes somos?</h2>
        <p>
        Somos un equipo apasionado por la frescura, la calidad y la salud, y creemos firmemente que una buena alimentación debe ser accesible, cómoda y placentera para todos. Como tienda digital de frutas y verduras, nos enfocamos en ofrecer una experiencia de compra innovadora y eficiente, pensada para satisfacer las necesidades de nuestros usuarios en un mundo cada vez más digitalizado y en constante cambio. Nuestra plataforma ha sido diseñada con el usuario en mente, priorizando la facilidad de uso,
        la rapidez en la búsqueda y un diseño visualmente atractivo que haga que la compra sea una experiencia agradable y sin complicaciones.
        </p>
      </div>
    </div>
    {/*Pegar debajo de esto Mission y visionm y debajo de missio ny vision, va proveedores*/}
    {/* Sección de Mision y visión */}
    <section className="nosotros-MisionVision">
      <h2>Misión y Visión</h2>
      <div className="nosotros-tarjetas">
        <div className="nosotros-tarjeta mision">
          <p>
          Nuestra misión es transformar la manera en que las personas compran frutas y verduras al ofrecer una plataforma digital que priorice la frescura, calidad y conveniencia. Creemos en una experiencia de compra que sea fácil y accesible para todos, en la que el usuario pueda encontrar lo que necesita de manera rápida y eficiente, con un diseño atractivo y amigable. Trabajamos de la mano con productores locales y sostenibles para garantizar que nuestros productos sean de la mejor calidad posible, mientras apoyamos el desarrollo de la economía local. Nos esforzamos por innovar continuamente en nuestras herramientas tecnológicas para mejorar la experiencia del cliente, asegurando que cada compra sea cómoda, rápida y segura. Nos comprometemos a mantener altos estándares de calidad en toda nuestra operación,
          desde la selección del producto hasta la entrega en la puerta del cliente, creando un impacto positivo en la salud y bienestar de las personas.
          </p>
        </div>
        <div className="nosotros-tarjeta vision">
          <p>
          Convertirnos en la plataforma digital de frutas y verduras de referencia en el mercado, brindando a nuestros usuarios una experiencia de compra ágil, dinámica y atractiva. Nos esforzamos por ofrecer siempre los productos más frescos y saludables, priorizando tanto la calidad como la accesibilidad, de modo que cada hogar pueda disfrutar de una alimentación nutritiva. Queremos ser reconocidos por nuestro compromiso con la sostenibilidad, el servicio personalizado y la tecnología, promoviendo un estilo de vida saludable en cada rincón donde llegamos.
          Visualizamos un futuro en el que adquirir frutas y verduras frescas sea tan sencillo y satisfactorio como hacer clic, y en el que nuestra marca inspire confianza y cuidado en cada paso de la cadena de suministro.
          </p>
        </div>
      </div>
    </section>
    {/* Fin Sección de Misión y visión */}
    {/* Sección de Proveedores */}
    <section className="nosotros-proveedores">
      <div className="nosotros-proveedoresGrid">
        <div className="nosotros-texto">
          <p>Nuestros Proveedores</p>
        </div>
            <div className="nosotros-proveedoresContenedor">
              <div className="circle">Empresa 1</div>
                <div className="circle">Empresa 2</div>
                 <div className="circle">Empresa 3</div>
            </div>
      </div>
    </section>
    {/* Fin Sección de Proveedores */}
    {/* Sección de Formulario */}
    <div className="formulario">
      <form onSubmit={handleSubmit} className="contact-form">
      <label>Nombre:</label>
      <input
          type="text"
          name="nombre" 
          value={formData.nombre}
          onChange={handleInputChange}
      />
      {errors.nombre && <span className="error">{errors.nombre}</span>}

      <label>Correo:</label>
      <input
          type="email"
          name="correo" 
          value={formData.correo}
          onChange={handleInputChange}
      />
      {errors.correo && <span className="error">{errors.correo}</span>}

      <label>Dirección:</label>
      <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
      />
      {errors.direccion && <span className="error">{errors.direccion}</span>}

      <label>Ciudad:</label>
      <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleInputChange}
      />
      {errors.ciudad && <span className="error">{errors.ciudad}</span>}

      <label>Teléfono:</label>
      <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
      />
      {errors.telefono && <span className="error">{errors.telefono}</span>}

      <label>Mensaje:</label>
      <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
      />
      {errors.mensaje && <span className="error">{errors.mensaje}</span>}

      <button type="submit">Enviar</button>
  </form>

    </div>
    {/* Fin Sección de Formulario */}

    </>
  );
};

export default sobreNosotros;
