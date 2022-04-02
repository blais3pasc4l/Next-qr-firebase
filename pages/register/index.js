import { useState } from "react";
import { StyleForm } from "../../styles/form";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
// import { signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../../components/Notification";

function Register() {
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

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        Credentials.email,
        Credentials.password
      );
      push("/profile");
    } catch ({ message }) {
      switch (message) {
        case (message === "Firebase: Error (auth/invalid-email)." || "Firebase: Error (auth/internal-error)."):
          showMessage("Revise los Campos")
          break;
        case ("Firebase: Password should be at least 6 characters (auth/weak-password)."):
          showMessage("Contraseña Debil")
          break;
        case ("Firebase: Error (auth/too-many-requests). "):
          showMessage("Revise los Campos2")
          break;
        case ("Firebase: Error (auth/email-already-in-use)."):
          showMessage("Ya se encuenta activa esta cuenta")
        break;
        default:
          console.log(`Sorry, we are out of ${message}.`);
          showMessage("Revise los campos")
      }
    }
  };

  const showMessage = (message) => {
    setMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2800);
  };

  return (
    <StyleForm>
      <Notification show={ShowNotification} message={Message} />
      
      <nav className="text-center nav-home">
        {[
          ['Home', '/'],

        ].map(([title, url]) => (
          <Link href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
      </nav>
      <div className="margenes-laterales">
        <div className="form-signin">
          <br />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
          <br />
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
              onClick={registerUser}
            >
              Registrarse
            </button>
          </div>

          <br />


          <p className="text-center">
            ¿Ya tienes cuenta?
            <p className=" register-text" ><Link href="/login"> Inicia sesión</Link></p>

          </p>
        </div>
      </div>
    </StyleForm>
  );
}

export default Register;
