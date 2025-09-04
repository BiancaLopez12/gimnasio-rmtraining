"use client"

import { useState, useEffect } from "react"
import PocketBase from 'pocketbase';
import { Menu, User, Instagram, Mail, X, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Inicializa el cliente de PocketBase
// Mantén esta URL tal cual, es la que funciona
const pb = new PocketBase('http://127.0.0.1:8090');

const screens = ["home", "contactos", "horarios", "rutinas", "merchandising", "gym"]

const screenTitles = {
  home: "INICIO",
  contactos: "CONTACTOS",
  horarios: "HORARIOS Y CLASES",
  rutinas: "RUTINAS",
  merchandising: "MERCHANDISING",
  gym: "GYM",
}

export default function RMTrainingApp() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [showMenu, setShowMenu] = useState(false)
  
  // ESTADOS para manejar la autenticación
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  // ESTADOS para los datos del formulario
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', passwordConfirm: '', name: '', lastname: '', email: '' });

  // Verifica el estado de autenticación al cargar la página
  useEffect(() => {
    setIsLoggedIn(pb.authStore.isValid);
    // Si el usuario ya está logueado, guarda sus datos en el estado.
    if (pb.authStore.isValid) {
      setUserData(pb.authStore.model);
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  // Funciones para manejar los formularios
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  
  // Función para iniciar sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authData = await pb.collection('users').authWithPassword(loginForm.username, loginForm.password);
      setIsLoggedIn(true);
      setUserData(authData.record); // Guarda la información del usuario logueado
      setShowLogin(false);
      setCurrentScreen("home");
      // Reemplazamos alert por una notificación más amigable
      console.log('Inicio de sesión exitoso!');
    } catch (error) {
      console.error('Error de inicio de sesión:', error.message);
      // Reemplazamos alert por una notificación más amigable
      console.log('Usuario o contraseña incorrectos.');
    }
  };

  // Función para registrarse
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { username, password, passwordConfirm, name, lastname, email } = registerForm;
      
      // Validar contraseñas antes de la llamada a PocketBase
      if (password !== passwordConfirm) {
        // Usar una notificación en lugar de alert
        console.log('Las contraseñas no coinciden.');
        return;
      }
      
      // Creamos el nuevo usuario
      const record = await pb.collection('users').create({ username, password, passwordConfirm, name, lastname, email });
      
      // Iniciar sesión con el usuario recién creado
      const authData = await pb.collection('users').authWithPassword(username, password);
      
      setIsLoggedIn(true);
      setUserData(authData.record); // Guarda la información del nuevo usuario
      setShowRegister(false);
      setCurrentScreen("home");
      // Usar una notificación en lugar de alert
      console.log('Registro y inicio de sesión exitoso!');
    } catch (error) {
      console.error('Error de registro:', error.message);
      // Notificación más detallada en caso de error
      console.log(`Hubo un error al registrarse. ${error.message}. Intenta de nuevo.`);
    }
  };

  const handleLogout = () => {
    pb.authStore.clear();
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentScreen("home");
    // Usar una notificación en lugar de alert
    console.log('Has cerrado sesión exitosamente.');
  };

  const renderContent = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="flex-1">
            <main className="relative">
              <div className="w-full h-[calc(100vh-80px)] relative">
                <Image
                  src="/imagenfondorm.svg"
                  alt="Modern gym interior with treadmills and weight equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </main>
            {/* Footer de la página de inicio, ahora con enlaces */}
            <footer className="bg-[#837a88] px-6 py-4 md:hidden">
              <div className="flex items-center justify-center gap-6">
                <a href="https://www.instagram.com/rm.training_?igsh=OHZmc3JwanB1MTkz" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="mailto:tucorreo@ejemplo.com">
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </footer>
          </div>
        )
      
      case "contactos":
        return (
          <div className="flex-1 bg-[#837a88] flex items-center justify-center">
            <h2 className="text-[#1e1e1e] text-xl font-semibold">CONTACTOS</h2>
          </div>
        )

      case "horarios":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">HORARIOS Y CLASES</h2>
          </div>
        )

      case "rutinas":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">RUTINAS</h2>
          </div>
        )

      case "merchandising":
        return (
          <div className="flex-1 bg-[#837a88] p-4">
            <h2 className="text-[#1e1e1e] text-lg font-semibold mb-4 text-center">MERCHANDISING</h2>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="mx-auto bg-[#1e1e1e] min-h-screen relative md:max-w-4xl lg:max-w-6xl">
      <header className="bg-[#181b2e] px-6 py-4 flex items-center justify-between relative">
        {/* Logo de la esquina izquierda */}
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src="/logo.png"
              alt="Logo de RM Training"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="text-white">
            <div className="text-red-500 font-bold text-xl">RM</div>
            <div className="text-white text-sm">training</div>
          </div>
        </div>

        {/* Logo central para móviles, oculto en PC */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="relative w-16 h-16 mx-auto">
            <Image
              src="/logo.png"
              alt="Logo de RM Training"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Botones de INICIAR SESIÓN y REGISTRARSE para PC */}
        {isLoggedIn ? (
          <nav className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
                <User className="w-6 h-6 text-white" />
                <span className="text-white font-medium">Hola, {userData?.name || 'Usuario'}</span>
            </div>
            <button className="text-red-500 font-medium hover:opacity-80 transition-opacity" onClick={handleLogout}>
              <LogOut className="w-6 h-6" />
            </button>
          </nav>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-red-500 font-medium hover:opacity-80 transition-opacity" onClick={() => setShowLogin(true)}>
              INICIAR SESION
            </button>
            <button className="text-red-500 font-medium hover:opacity-80 transition-opacity" onClick={() => setShowRegister(true)}>
              REGISTRARSE
            </button>
          </nav>
        )}
        
        {/* Icono de usuario y menú para móviles (condicional) */}
        <div className="flex items-center gap-4 md:hidden">
            {isLoggedIn ? (
              <>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-[#181b2e]" />
                </div>
                <Menu className="w-8 h-8 text-white" onClick={() => setShowMenu(!showMenu)}/>
              </>
            ) : (
              <div className="flex items-center gap-4">
                 <button className="text-red-500 font-medium" onClick={() => setShowLogin(true)}>INICIAR SESION</button>
                 <button className="text-red-500 font-medium" onClick={() => setShowRegister(true)}>REGISTRARSE</button>
              </div>
            )}
        </div>
      </header>

      {/* Navigation Menu Overlay (solo en móvil) */}
      {showMenu && isLoggedIn && (
        <div className="absolute top-20 right-4 bg-[#181b2e] rounded-lg shadow-lg z-10 min-w-48 md:hidden">
          {screens.map((screen, index) => (
            <button
              key={index}
              className="w-full px-4 py-3 text-left text-[#ffffff] hover:bg-[#837a88]/20 first:rounded-t-lg last:rounded-b-lg border-b border-[#837a88]/20 last:border-b-0"
              onClick={() => {
                setCurrentScreen(screen)
                setShowMenu(false)
              }}
            >
              {screenTitles[screen]}
            </button>
          ))}
          <button className="w-full px-4 py-3 text-left text-red-500 hover:bg-[#837a88]/20 last:rounded-b-lg" onClick={handleLogout}>
            CERRAR SESIÓN
          </button>
        </div>
      )}

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Barra lateral de navegación (condicional) */}
        {isLoggedIn && (
          <div className="hidden md:flex flex-col w-64 bg-[#181b2e] p-4 gap-2">
            {screens.map((screen, index) => (
              <button
                key={index}
                className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                  currentScreen === screen ? "bg-red-500 text-[#ffffff]" : "text-[#ffffff] hover:bg-[#837a88]/20"
                }`}
                onClick={() => setCurrentScreen(screen)}
              >
                {screenTitles[screen]}
              </button>
            ))}
             <button className="w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 text-red-500 hover:bg-[#837a88]/20" onClick={handleLogout}>
              CERRAR SESIÓN
            </button>
          </div>
        )}
        
        {/* Contenido dinámico del screen */}
        <div className="flex-1 overflow-auto">
          {isLoggedIn ? (
            renderContent()
          ) : (
            <div className="w-full h-[calc(100vh-80px)] relative">
                <Image
                  src="/imagenfondorm.svg"
                  alt="Modern gym interior with treadmills and weight equipment"
                  fill
                  className="object-cover"
                  priority
                />
            </div>
          )}
        </div>
      </div>
      
      {/* Formularios de login y registro */}
      {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-[#181b2e] p-8 rounded-lg shadow-xl w-80 relative">
                  <button onClick={() => setShowLogin(false)} className="absolute top-2 right-2 text-white"><X /></button>
                  <h2 className="text-red-500 text-2xl font-bold mb-6 text-center">INICIAR SESIÓN</h2>
                  <form onSubmit={handleLogin} className="flex flex-col gap-4">
                      <input type="text" name="username" placeholder="Usuario" value={loginForm.username} onChange={handleLoginChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="password" name="password" placeholder="Contraseña" value={loginForm.password} onChange={handleLoginChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <Button type="submit" className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition-colors">Entrar</Button>
                  </form>
              </div>
          </div>
      )}

      {showRegister && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-[#181b2e] p-8 rounded-lg shadow-xl w-80 relative">
                  <button onClick={() => setShowRegister(false)} className="absolute top-2 right-2 text-white"><X /></button>
                  <h2 className="text-red-500 text-2xl font-bold mb-6 text-center">REGISTRARSE</h2>
                  <form onSubmit={handleRegister} className="flex flex-col gap-4">
                      <input type="text" name="username" placeholder="Usuario" value={registerForm.username} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="password" name="password" placeholder="Contraseña" value={registerForm.password} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="password" name="passwordConfirm" placeholder="Confirmar Contraseña" value={registerForm.passwordConfirm} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="text" name="name" placeholder="Nombre" value={registerForm.name} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="text" name="lastname" placeholder="Apellido" value={registerForm.lastname} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <input type="email" name="email" placeholder="Email" value={registerForm.email} onChange={handleRegisterChange} required className="p-3 rounded-md bg-[#2a2d3e] text-white placeholder-gray-400" />
                      <Button type="submit" className="w-full bg-red-500 text-white font-semibold py-3 rounded-md hover:bg-red-600 transition-colors">Registrarse</Button>
                  </form>
              </div>
          </div>
      )}
    </div>
  )
}