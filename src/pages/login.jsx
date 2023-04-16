import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticación aquí
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 6);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="border rounded-lg py-2 px-3 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`border rounded-lg py-2 px-3 w-full ${
                passwordValid ? 'border-green-500' : 'border-red-500'
              }`}
            />
            {passwordValid ? (
              <p className="text-sm text-green-500">Contraseña válida</p>
            ) : (
              <p className="text-sm text-red-500">
                La contraseña debe tener al menos 5 caracteres.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            disabled={!passwordValid}
          >
            Iniciar Sesión
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
