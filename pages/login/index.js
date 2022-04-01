import { useState } from "react";
import { StyleForm } from "../../styles/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Notification from "../../components/Notification";

function Login() {
  const [Credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { push } = useRouter();

  const changeUser = (e) => {
    setCredentials({
      ...Credentials,
      [e.target.name]: e.target.value,
    });
  };
  const [Message, setMessage] = useState("");
  const [ShowNotification, setShowNotification] = useState(false);

  const showMessage = (message) => {
    setMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2800);
  };
  
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/profile");
    } catch ({message}) {
      if (message === "Firebase: Error (auth/wrong-password)." || "Firebase: Error (auth/wrong-email).") {
        showMessage("Contraseña o Correo son incorrectos")
      }
      
    }
  };
  return (
    <StyleForm>
      <Notification show={ShowNotification} message={Message} />
      <br/>
      <nav className="text-center nav-home">
        {[
          ['Home', '/'],

        ].map(([title, url]) => (
          <Link href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
      </nav>
      <div  className="margenes-laterales">
        <div className="form-signin">
          <br/>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Iniciar sesión
        </h2>
          <br/>
          <div className="center">
            <input
              name="email"
              type="text"
              className="input-form"
              placeholder="Correo"
              onChange={changeUser}
            />
          </div>
          <div className="center">
            <input
              name="password"
              type="password"
              className="input-form"
              placeholder="Contraseña"
              onChange={changeUser}
            />
          </div>
          <br />
          <div className="center">
            <button
              className="button-signup fondo-color-signup"
              onClick={loginUser}
            >
              Iniciar sesión
              
            </button>
          </div>
          
          <br />
          
          <p className="text-center">
            ¿Aún no tienes cuenta?  
            <p className=" register-text" ><Link href="/register"> Registrate</Link></p>
              
          </p>
        </div>
      </div>
    </StyleForm>
  );
}

export default Login;
