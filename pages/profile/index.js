import { StyleForm } from "../../styles/form";
import Image from "next/image";
import Footer from "../../components/Footer";
import {maxWidth} from '@material-ui/core'
import Agregar from "../../components/Agregar";
import { useRouter } from "next/router";
export default function Home() {
  let router = useRouter();
  const logout = (push) => {
    sessionStorage.removeItem("Token");
    router.push("/");
  };

  return (
    <StyleForm>
      <br />
      <ul>
        <li onClick={logout} className="text-center nav-home">
          Salir
        </li>
      </ul>

      <br />

      
      <br />
      <h1 className="text-center text-title-init">Generador De QR Gratis</h1>

      <br />

      <section className="margenes-laterales">
        <h2 className=" text-center register-text">
          Creado para Restaurantes, Bares, & Cafés Sube tu menú y descarga tu
          código QR
        </h2>
      </section>
      <br />
      <section className="image-home">
        <Agregar />
      </section>

      <br />

      <Footer />
    </StyleForm>
  );
}
