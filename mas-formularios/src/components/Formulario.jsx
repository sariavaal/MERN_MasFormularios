import { useState } from "react";
const MyFormulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let errorMessage = "";
    if (id === "name") {
        //si tiene menos de 2 caracteres
        if (value.length < 2) {
            errorMessage = "Nombre debe tener al menos 2 caracteres";
        }
    }
    if (id === "lastName") {
        //si tiene menos de 2 caracteres
        if (value.length < 2) {
            errorMessage = "Apellido debe tener al menos 2 caracteres";
        }
    }
    if (id === "email") {
        //si tiene menos de 5 caracteres
        if (value.length < 5) {
            errorMessage = "Email debe tener al menos 5 caracteres";
        }
    }
    if (id === "password") {
        //si tiene menos de 8 caracteres
        if (value.length < 8) {
            errorMessage = "Contraseña debe tener al menos 8 caracteres";
        }
    }
    if (id === "confirmPassword") {
        //debe coincidir con la contraseña ingresada
        if (value !== formData.password) {
            errorMessage = "Las contraseñas no coinciden";
        }
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
      [`${id}Error`]: errorMessage, //Agregar mensaje de error al estado del formulario
    }));
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <input
            type="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your first name"
            required
          />
          {formData.nameError && (
              <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Error</span> {formData.nameError}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your last name"
            required
          />
         {formData.lastNameError && (
              <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Error</span> {formData.lastNameError}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="your email"
            required
          />
         {formData.emailError && (
              <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Error</span> {formData.emailError}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {formData.passwordError && (
              <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Error</span> {formData.passwordError}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {formData.confirmPasswordError && (
              <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Error</span> {formData.confirmPasswordError}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default MyFormulario;
